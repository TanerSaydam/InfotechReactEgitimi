using eCommerce.Application.Services;
using eCommerce.Domain.Users;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TS.Result;

namespace eCommerce.Application.Auth;
public sealed record LoginCommand(
    string UserNameOrEmail,
    string Password) : IRequest<Result<string>>;

internal sealed class LoginCommandHandler(
    UserManager<AppUser> userManager,
    IJwtProvider jwtProvider
    ) : IRequestHandler<LoginCommand, Result<string>>
{
    public async Task<Result<string>> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var user = await userManager.Users.FirstOrDefaultAsync(p => p.Email == request.UserNameOrEmail || p.UserName == request.UserNameOrEmail, cancellationToken);

        if (user is null)
        {
            return Result<string>.Failure("Kullanıcı bilgisi ya da şifre yanlış");
        }

        bool checkPassword = await userManager.CheckPasswordAsync(user, request.Password);
        if (!checkPassword)
        {
            return Result<string>.Failure("Kullanıcı bilgisi ya da şifre yanlış");
        }

        var token = jwtProvider.CreateToken(user);
        return token;
    }
}