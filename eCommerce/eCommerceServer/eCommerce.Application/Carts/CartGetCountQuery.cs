using eCommerce.Domain.Carts;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TS.Result;

namespace eCommerce.Application.Carts;
public sealed record CartGetCountQuery : IRequest<Result<int>>;

internal sealed class CartGetCountQueryHandler(
    IHttpContextAccessor httpContextAccessor,
    ICartRepository cartRepository) : IRequestHandler<CartGetCountQuery, Result<int>>
{
    public async Task<Result<int>> Handle(CartGetCountQuery request, CancellationToken cancellationToken)
    {
        string userId = httpContextAccessor.HttpContext.User.Claims.First(p => p.Type == "userId").Value;
        var count = await cartRepository.Where(p => p.UserId.ToString() == userId).CountAsync(cancellationToken);

        return count;
    }
}