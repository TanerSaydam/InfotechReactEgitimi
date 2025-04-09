namespace WebAPI.Models;

public sealed class Todo
{
    public Todo()
    {
        Id = Guid.CreateVersion7();
    }
    public Guid Id { get; set; }
    public string Work { get; set; } = default!;
}