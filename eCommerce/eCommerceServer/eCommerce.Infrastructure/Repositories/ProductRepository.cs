using eCommerce.Domain.Products;
using eCommerce.Infrastructure.Context;
using GenericRepository;

namespace eCommerce.Infrastructure.Repositories;
internal sealed class ProductRepository : Repository<Product, ApplicationDbContext>, IProductRepository
{
    public ProductRepository(ApplicationDbContext context) : base(context)
    {
    }
}