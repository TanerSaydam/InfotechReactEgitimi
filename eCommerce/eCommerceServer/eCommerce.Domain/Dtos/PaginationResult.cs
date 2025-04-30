namespace eCommerce.Domain.Dtos;
public sealed class PaginationResult<T>
    where T : class
{
    public List<T> Data { get; set; } = new();
    public int Total { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public decimal TotalPages { get; set; }
    public List<int> PageNumbers { get; set; } = new();
}
