using MiniBlogAPI.Models;
using Microsoft.Data.SqlClient;

namespace MiniBlogAPI.Services;

public class BlogPostService
{
    private readonly string _connectionString;

    public BlogPostService(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Default")!;
    }

    public IEnumerable<BlogPost> GetAll()
    {
        var posts = new List<BlogPost>();

        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand(
            @"SELECT Id, Title, Content, CreatedAt
              FROM BlogPost
              ORDER BY CreatedAt DESC",
            connection);

        connection.Open();
        using var reader = command.ExecuteReader();

        while (reader.Read())
        {
            posts.Add(new BlogPost
            {
                Id = reader.GetInt32(0),
                Title = reader.GetString(1),
                Content = reader.GetString(2),
                CreatedAt = reader.GetDateTime(3)
            });
        }

        return posts;
    }

    public void Create(string title, string content)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand(
            @"INSERT INTO BlogPost (Title, Content)
              VALUES (@Title, @Content)",
            connection);

        command.Parameters.AddWithValue("@Title", title);
        command.Parameters.AddWithValue("@Content", content);

        connection.Open();
        command.ExecuteNonQuery();
    }
}