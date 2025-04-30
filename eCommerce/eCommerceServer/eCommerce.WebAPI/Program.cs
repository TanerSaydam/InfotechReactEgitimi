using Bogus;
using eCommerce.Application;
using eCommerce.Application.Categories;
using eCommerce.Application.Products;
using eCommerce.Domain.Categories;
using eCommerce.Domain.Dtos;
using eCommerce.Domain.Products;
using eCommerce.Infrastructure;
using GenericRepository;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using TS.Result;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddAntiforgery();

builder.Services.AddOpenApi();

builder.Services.AddCors();

var app = builder.Build();

app.MapOpenApi();
app.MapScalarApiReference();

app.UseAntiforgery();
app.UseStaticFiles();

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .SetPreflightMaxAge(TimeSpan.FromMinutes(10)));

app.MapPost("categories",
    async ([FromForm] CategoryCreateCommand request, ISender sender, CancellationToken cancellationToken) =>
    {
        var response = await sender.Send(request, cancellationToken);
        return response.IsSuccessful ? Results.Ok(response) : Results.InternalServerError(response);
    })
    .Produces<Result<string>>()
    .DisableAntiforgery();

app.MapGet("categories",
    async (ISender sender, CancellationToken cancellationToken) =>
    {
        var response = await sender.Send(new CategoryGetAllQuery(), cancellationToken);
        return Results.Ok(response);
    })
    .Produces<List<CategoryGetAllQueryResponse>>();

app.MapPost("seed-data/categories",
    async (ICategoryRepository categoryRepository, IUnitOfWork unitOfWork, CancellationToken cancellationToken) =>
    {
        List<Category> categories = new();
        Category category1 = new()
        {
            Name = "Elektronik",
            UrlShortName = "elektronik",
            ImageUrl = "elektronik.jpeg"
        };
        categories.Add(category1);

        Category category2 = new()
        {
            Name = "Telefonlar",
            UrlShortName = "telefonlar",
            ImageUrl = "telefonlar.jpeg"
        };
        categories.Add(category2);

        Category category3 = new()
        {
            Name = "Bilgisayarlar",
            UrlShortName = "bilgisayarlar",
            ImageUrl = "bilgisayarlar.jpg"
        };
        categories.Add(category3);

        Category category4 = new()
        {
            Name = "Tabletler",
            UrlShortName = "tabletler",
            ImageUrl = "tabletler.jpg"
        };
        categories.Add(category4);

        categoryRepository.AddRange(categories);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Results.Ok();
    });

app.MapGet("products",
    async (int pageSize, int pageNumber, string? categoryUrlShortName, string OrderByPrice, ISender sender, CancellationToken cancellationToken) =>
    {
        var response = await sender.Send(new ProductGetAllQuery(categoryUrlShortName, pageSize, pageNumber, OrderByPrice), cancellationToken);
        return Results.Ok(response);
    })
    .Produces<PaginationResult<ProductGetAllQueryResponse>>();

app.MapPost("seed-data/products",
    async (
        IProductRepository productRepository,
        ICategoryRepository categoryRepository,
        IUnitOfWork unitOfWork,
        CancellationToken cancellationToken) =>
    {
        var categories = await categoryRepository.GetAll().ToListAsync(cancellationToken);
        List<string> productImages = new()
        {
            "bilgisayar.jpeg",
            "canta.jpeg",
            "domates.jpeg",
            "gozluk.jpeg"
        };
        List<Product> products = new();
        for (int i = 0; i < 100; i++)
        {
            int imageIndexNumber = new Random().Next(productImages.Count());


            int categoryIndex = new Random().Next(0, categories.Count());
            var category = categories[categoryIndex];
            Faker faker = new();
            Product product = new()
            {
                Name = faker.Commerce.ProductName(),
                Price = Convert.ToDecimal(faker.Commerce.Price(10, 100000)),
                Description = faker.Commerce.ProductDescription(),
                ImageUrl = productImages[imageIndexNumber],
                CategoryId = category.Id
            };
            products.Add(product);
        }

        productRepository.AddRange(products);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Results.Ok();
    });

app.Run();