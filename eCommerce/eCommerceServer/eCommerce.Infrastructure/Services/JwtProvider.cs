using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using eCommerce.Application.Services;
using eCommerce.Domain.Users;
using eCommerce.Infrastructure.Options;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace eCommerce.Infrastructure.Services;
internal sealed class JwtProvider(
    IOptions<JwtOptions> options) : IJwtProvider
{
    public string CreateToken(AppUser appUser)
    {
        var claims = new List<Claim>()
        {
            new Claim("userId", appUser.Id.ToString()),
            new Claim("fullName", appUser.FullName),
            new Claim("email", appUser.Email!)
        };

        DateTime expires = DateTime.Now.AddDays(1);

        SymmetricSecurityKey securityKey = new(Encoding.UTF8.GetBytes(options.Value.SecretKey));
        SigningCredentials signingCredentials = new(securityKey, SecurityAlgorithms.HmacSha512);

        var securityToken = new JwtSecurityToken(
            issuer: options.Value.Issuer,
            audience: options.Value.Audience,
            claims: claims,
            notBefore: DateTime.Now,
            expires: expires,
            signingCredentials: signingCredentials);

        var tokenHandler = new JwtSecurityTokenHandler();

        var token = tokenHandler.WriteToken(securityToken);

        return token;
    }
}