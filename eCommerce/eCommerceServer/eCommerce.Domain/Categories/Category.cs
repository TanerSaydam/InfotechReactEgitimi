using eCommerce.Domain.Abstractions;

namespace eCommerce.Domain.Categories;
public sealed class Category : Entity
{
    public string Name { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
}