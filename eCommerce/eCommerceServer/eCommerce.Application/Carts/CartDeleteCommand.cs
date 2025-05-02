using eCommerce.Domain.Carts;
using GenericRepository;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TS.Result;

namespace eCommerce.Application.Carts;
public sealed record CartDeleteCommand(
    Guid? Id) : IRequest<Result<string>>;

internal sealed class CartDeleteCommandHandler(
    IHttpContextAccessor httpContextAccessor,
    ICartRepository cartRepository,
    IUnitOfWork unitOfWork) : IRequestHandler<CartDeleteCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CartDeleteCommand request, CancellationToken cancellationToken)
    {
        string userId = httpContextAccessor.HttpContext.User.Claims.First(p => p.Type == "userId").Value;
        if (request.Id is null)
        {
            var carts = await cartRepository.Where(p => p.UserId.ToString() == userId).ToListAsync(cancellationToken);

            foreach (var item in carts)
            {
                item.IsDeleted = true;
            }

            cartRepository.UpdateRange(carts);
        }
        else
        {
            var cart = await cartRepository.FirstAsync(p => p.Id == request.Id, cancellationToken);
            cart.IsDeleted = true;
            cartRepository.Update(cart);
        }

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Sepetten ürün başarıyla silindi";
    }
}