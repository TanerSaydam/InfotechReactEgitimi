using eCommerce.Domain.Users;

namespace eCommerce.Application.Services;
public interface IJwtProvider
{
    string CreateToken(AppUser appUser);
}
