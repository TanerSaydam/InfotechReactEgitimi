using eCommerce.Domain.Carts;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Application.Carts;
public sealed record CartGetAllQuery : IRequest<List<Cart>>;

internal sealed class CartGetAllQueryHandler(
    IHttpContextAccessor httpContextAccessor,
    ICartRepository cartRepository) : IRequestHandler<CartGetAllQuery, List<Cart>>
{
    public async Task<List<Cart>> Handle(CartGetAllQuery request, CancellationToken cancellationToken)
    {
        string userId = httpContextAccessor.HttpContext.User.Claims.First(p => p.Type == "userId").Value;

        var carts = await cartRepository
            .Where(p => p.UserId == Guid.Parse(userId))
            .Include(i => i.Product)
            .ToListAsync(cancellationToken);

        return carts;
    }
}
