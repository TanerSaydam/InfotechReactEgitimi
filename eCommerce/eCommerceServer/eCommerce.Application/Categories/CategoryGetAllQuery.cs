using eCommerce.Domain.Categories;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Application.Categories;
public sealed record CategoryGetAllQuery : IRequest<List<CategoryGetAllQueryResponse>>;

public sealed class CategoryGetAllQueryResponse
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string UrlShortName { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
}

internal sealed class CategoryGetAllQueryHandler(
    ICategoryRepository categoryRepository) : IRequestHandler<CategoryGetAllQuery, List<CategoryGetAllQueryResponse>>
{
    public async Task<List<CategoryGetAllQueryResponse>> Handle(CategoryGetAllQuery request, CancellationToken cancellationToken)
    {
        var categories = await categoryRepository
            .GetAll()
            .OrderBy(p => p.Name)
            .Select(s => new CategoryGetAllQueryResponse
            {
                Id = s.Id,
                Name = s.Name,
                UrlShortName = s.UrlShortName,
                ImageUrl = s.ImageUrl,
            })
            .ToListAsync(cancellationToken);

        return categories;
    }
}