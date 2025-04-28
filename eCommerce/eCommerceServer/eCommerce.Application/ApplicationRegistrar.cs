using Microsoft.Extensions.DependencyInjection;

namespace eCommerce.Application;
public static class ApplicationRegistrar
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(cfr =>
        {
            cfr.RegisterServicesFromAssembly(typeof(ApplicationRegistrar).Assembly);
        });

        return services;
    }
}