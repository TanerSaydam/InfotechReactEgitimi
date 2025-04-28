using eCommerce.Domain.Categories;
using eCommerce.Infrastructure.Context;
using GenericRepository;

namespace eCommerce.Infrastructure.Repositories;
internal sealed class CategoryRepository : Repository<Category, ApplicationDbContext>, ICategoryRepository
{
    public CategoryRepository(ApplicationDbContext context) : base(context)
    {
    }
}