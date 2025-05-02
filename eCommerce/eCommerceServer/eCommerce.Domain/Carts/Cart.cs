using eCommerce.Domain.Abstractions;
using eCommerce.Domain.Products;

namespace eCommerce.Domain.Carts;
public sealed class Cart : Entity
{
    public Guid UserId { get; set; }
    public Guid ProductId { get; set; }
    public Product? Product { get; set; }
    public int Quantity { get; set; }
}