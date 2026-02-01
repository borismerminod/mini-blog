using Microsoft.AspNetCore.Cors.Infrastructure;
using MiniBlogAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var corsPolicyName = "Front";
builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, policy =>
    {
        policy
            .WithOrigins("http://localhost:4200", "http://localhost:8080")
            .AllowAnyHeader()
            .AllowAnyMethod()
            // .AllowCredentials()                 
            ;
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<BlogPostService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(corsPolicyName);
//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
