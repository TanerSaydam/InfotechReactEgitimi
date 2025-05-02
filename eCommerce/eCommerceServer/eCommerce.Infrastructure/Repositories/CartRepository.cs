using eCommerce.Domain.Carts;
using eCommerce.Infrastructure.Context;
using GenericRepository;

namespace eCommerce.Infrastructure.Repositories;
internal sealed class CartRepository : Repository<Cart, ApplicationDbContext>, ICartRepository
{
    public CartRepository(ApplicationDbContext context) : base(context)
    {
    }
}