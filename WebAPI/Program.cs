using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using WebAPI.Context;
using WebAPI.Dtos;
using WebAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.AddDbContext<ApplicationDbContext>(opt => opt.UseInMemoryDatabase("MyDb"));

builder.Services.AddCors();

var app = builder.Build();

app.MapOpenApi();
app.MapScalarApiReference();

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowAnyOrigin()
    .SetPreflightMaxAge(TimeSpan.FromMinutes(10))
);

app.MapGet("/", () => "Hello World!");

app.MapGet("/todos",
    async (ApplicationDbContext context, CancellationToken cancellationToken) =>
    {
        var todos = await context.Todos.ToListAsync(cancellationToken);
        return Results.Ok(todos);
    })
    .Produces<List<Todo>>();

app.MapPost("/todos",
    async (CreateTodoDto request, ApplicationDbContext context, CancellationToken cancellationToken) =>
    {
        Todo todo = new()
        {
            Work = request.Work,
        };
        context.Add(todo);
        await context.SaveChangesAsync(cancellationToken);

        return Results.Created();
    });

app.MapPut("/todos",
    async (UpdateTodoDto request, ApplicationDbContext context, CancellationToken cancellationToken) =>
    {
        Todo? todo = await context.Todos.FirstOrDefaultAsync(p => p.Id == request.Id, cancellationToken);
        if (todo is null)
        {
            return Results.NotFound();
        }

        todo.Work = request.Work;
        context.Update(todo);
        await context.SaveChangesAsync(cancellationToken);

        return Results.Created();
    });

app.MapDelete("/todos/{id}",
    async (Guid id, ApplicationDbContext context, CancellationToken cancellationToken) =>
    {
        Todo? todo = await context.Todos.FindAsync(id, cancellationToken);
        if (todo is null)
        {
            return Results.NotFound();
        }

        context.Remove(todo);
        await context.SaveChangesAsync(cancellationToken);

        return Results.NoContent();
    });

app.Run();
