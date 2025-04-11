namespace WebAPI.Dtos;

public sealed record UpdateTodoDto(
    Guid Id,
    string Work);