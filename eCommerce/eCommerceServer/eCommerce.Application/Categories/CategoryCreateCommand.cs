using eCommerce.Domain.Categories;
using GenericFileService.Files;
using GenericRepository;
using MediatR;
using Microsoft.AspNetCore.Http;
using Slugify;
using TS.Result;

namespace eCommerce.Application.Categories;
public sealed record CategoryCreateCommand(
    string Name,
    IFormFile File) : IRequest<Result<string>>;

internal sealed class CategoryCreateCommandHandler(
    ICategoryRepository categoryRepository,
    IUnitOfWork unitOfWork) : IRequestHandler<CategoryCreateCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CategoryCreateCommand request, CancellationToken cancellationToken)
    {
        bool isNameExists = await categoryRepository.AnyAsync(p => p.Name == request.Name, cancellationToken);
        if (isNameExists)
        {
            return Result<string>.Failure("Kategori adı daha önce oluşturulmuş");
        }

        var slugHelper = new SlugHelper();
        string slug = slugHelper.GenerateSlug(request.Name);

        string fileName = FileService.FileSaveToServer(request.File, "wwwroot/images/categories/");

        Category category = new()
        {
            Name = request.Name,
            UrlShortName = slug,
            ImageUrl = fileName
        };
        categoryRepository.Add(category);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Kayıt başarıyla tamamlandı";
    }
}