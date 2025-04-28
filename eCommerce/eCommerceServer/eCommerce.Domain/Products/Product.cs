using eCommerce.Domain.Abstractions;
using eCommerce.Domain.Categories;

namespace eCommerce.Domain.Products;
public sealed class Product : Entity
{
    public string Name { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public decimal Price { get; set; }
    public string Description { get; set; } = default!;
    public Guid CategoryId { get; set; }
    public Category? Category { get; set; }
}
