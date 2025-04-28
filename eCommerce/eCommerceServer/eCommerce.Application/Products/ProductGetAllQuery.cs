using eCommerce.Domain.Products;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Application.Products;
public sealed record ProductGetAllQuery : IRequest<List<ProductGetAllQueryResponse>>;

public sealed class ProductGetAllQueryResponse
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public string Description { get; set; } = default!;
    public decimal Price { get; set; } = default!;
    public Guid CategoryId { get; set; }
    public string CategoryName { get; set; } = default!;
}

internal sealed class ProductGetAllQueryHandler(
    IProductRepository productRepository
    ) : IRequestHandler<ProductGetAllQuery, List<ProductGetAllQueryResponse>>
{
    public async Task<List<ProductGetAllQueryResponse>> Handle(ProductGetAllQuery request, CancellationToken cancellationToken)
    {
        var products = await productRepository
            .GetAll()
            .OrderBy(p => p.Name)
            .Select(s => new ProductGetAllQueryResponse
            {
                Id = s.Id,
                Name = s.Name,
                ImageUrl = s.ImageUrl,
                Description = s.Description,
                Price = s.Price,
                CategoryId = s.CategoryId,
                CategoryName = s.Category!.Name
            })
            .ToListAsync(cancellationToken);

        return products;
    }
}