using eCommerce.Application.Services;
using eCommerce.Domain.Users;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Identity;
using TS.Result;

namespace eCommerce.Application.Auth;
public sealed record RegisterCommand(
    string FirstName,
    string LastName,
    string UserName,
    string Email,
    string PhoneNumber,
    string Password) : IRequest<Result<string>>;

internal sealed class RegisterCommandHandler(
    UserManager<AppUser> userManager,
    IJwtProvider jwtProvider) : IRequestHandler<RegisterCommand, Result<string>>
{
    public async Task<Result<string>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        AppUser appUser = request.Adapt<AppUser>();
        var result = await userManager.CreateAsync(appUser, request.Password);
        if (!result.Succeeded)
        {
            return Result<string>.Failure(result.Errors.Select(s => s.Description).ToList());
        }

        var token = jwtProvider.CreateToken(appUser);
        return token;
    }
}