using Microsoft.AspNetCore.Mvc;
using MiniBlogAPI.Services;

namespace MiniBlog.Api.Controllers;

[ApiController]
[Route("api/posts")]
public class BlogPostController : ControllerBase
{
    private readonly BlogPostService _service;

    public BlogPostController(BlogPostService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var posts = _service.GetAll();
        return Ok(posts);
    }

    [HttpPost]
    public IActionResult Create(CreatePostRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Title) ||
            string.IsNullOrWhiteSpace(request.Content))
        {
            return BadRequest("Title and content are required");
        }

        _service.Create(request.Title, request.Content);
        return Created("", null);
    }
}

public record CreatePostRequest(string Title, string Content);