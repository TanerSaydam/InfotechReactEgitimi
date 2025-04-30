using eCommerce.Domain.Categories;
using eCommerce.Domain.Dtos;
using eCommerce.Domain.Products;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Application.Products;
public sealed record ProductGetAllQuery(
    string? categoryUrlShortName,
    int PageSize = 8,
    int PageNumber = 1,
    string OrderByPrice = "asc"
    ) : IRequest<PaginationResult<ProductGetAllQueryResponse>>;

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
    IProductRepository productRepository,
    ICategoryRepository categoryRepository
    ) : IRequestHandler<ProductGetAllQuery, PaginationResult<ProductGetAllQueryResponse>>
{
    public async Task<PaginationResult<ProductGetAllQueryResponse>> Handle(ProductGetAllQuery request, CancellationToken cancellationToken)
    {
        if (request.categoryUrlShortName is not null)
        {
            var category = await categoryRepository.FirstOrDefaultAsync(p => p.UrlShortName == request.categoryUrlShortName, cancellationToken);

            var productQuery = productRepository
                .GetAll()
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
                .Where(p => p.CategoryId == category.Id)
                .AsQueryable();

            if (request.OrderByPrice == "asc")
            {
                productQuery = productQuery.OrderBy(p => p.Price);
            }
            else if (request.OrderByPrice == "desc")
            {
                productQuery = productQuery.OrderByDescending(p => p.Price);
            }

            var products = await productQuery
                .Skip(request.PageNumber - 1)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            int total = productRepository.Where(p => p.CategoryId == category.Id).Count();
            decimal totalPage = Convert.ToDecimal(total) / Convert.ToDecimal(request.PageSize);
            PaginationResult<ProductGetAllQueryResponse> result = new()
            {
                Data = products,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Total = total,
                TotalPages = Math.Ceiling(totalPage)
            };

            for (int i = 0; i < result.TotalPages; i++)
            {
                result.PageNumbers.Add(i + 1);
            }

            return result;
        }
        else
        {
            var productQuery = productRepository
                .GetAll()
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
                .AsQueryable();

            if (request.OrderByPrice == "asc")
            {
                productQuery = productQuery.OrderBy(p => p.Price);
            }
            else if (request.OrderByPrice == "desc")
            {
                productQuery = productQuery.OrderByDescending(p => p.Price);
            }

            var products = await productQuery
                .Skip(request.PageNumber - 1)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            int total = productRepository.GetAll().Count();
            decimal totalPage = Convert.ToDecimal(total) / Convert.ToDecimal(request.PageSize);
            PaginationResult<ProductGetAllQueryResponse> result = new()
            {
                Data = products,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Total = total,
                TotalPages = Math.Ceiling(totalPage)
            };

            for (int i = 0; i < result.TotalPages; i++)
            {
                result.PageNumbers.Add(i + 1);
            }

            return result;
        }
    }
}