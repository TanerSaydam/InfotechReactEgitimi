using eCommerce.Domain.Carts;
using GenericRepository;
using MediatR;
using Microsoft.AspNetCore.Http;
using TS.Result;

namespace eCommerce.Application.Carts;
public sealed record CartCreateCommand(
    Guid ProductId) : IRequest<Result<string>>;

internal sealed class CartCreateCommandHandler(
    ICartRepository cartRepository,
    IUnitOfWork unitOfWork,
    IHttpContextAccessor httpContextAccessor) : IRequestHandler<CartCreateCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CartCreateCommand request, CancellationToken cancellationToken)
    {
        string userId = httpContextAccessor.HttpContext.User.Claims.First(p => p.Type == "userId").Value;

        Cart cart = new()
        {
            UserId = Guid.Parse(userId),
            ProductId = request.ProductId,
            Quantity = 1
        };

        cartRepository.Add(cart);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Ürün başarıyla sepete eklendi";
    }
}