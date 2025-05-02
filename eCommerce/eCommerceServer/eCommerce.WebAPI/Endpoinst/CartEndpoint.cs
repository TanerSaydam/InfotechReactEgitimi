using eCommerce.Application.Carts;
using eCommerce.Domain.Carts;
using MediatR;
using TS.Result;

namespace eCommerce.WebAPI.Endpoinst;

public static class CartEndpoint
{
    public static WebApplication MapCarts(this WebApplication app)
    {
        //Cart
        app.MapPost("carts",
            async (
                CartCreateCommand request,
                ISender sender,
                CancellationToken cancellationToken) =>
            {
                var response = await sender.Send(request, cancellationToken);
                return response.IsSuccessful ? Results.Ok(response) : Results.InternalServerError(response);
            })
            .Produces<Result<string>>()
            .RequireAuthorization();

        //Cart
        app.MapDelete("carts",
            async (
                Guid? id,
                ISender sender,
                CancellationToken cancellationToken) =>
            {
                var response = await sender.Send(new CartDeleteCommand(id), cancellationToken);
                return response.IsSuccessful ? Results.Ok(response) : Results.InternalServerError(response);
            })
            .Produces<Result<string>>()
            .RequireAuthorization();

        //Cart
        app.MapGet("carts",
            async (
                ISender sender,
                CancellationToken cancellationToken) =>
            {
                var response = await sender.Send(new CartGetAllQuery(), cancellationToken);
                return Results.Ok(response);
            })
            .Produces<List<Cart>>()
            .RequireAuthorization();

        //Cart
        app.MapGet("carts/get-count",
            async (
                ISender sender,
                CancellationToken cancellationToken) =>
            {
                var response = await sender.Send(new CartGetCountQuery(), cancellationToken);
                return Results.Ok(response);
            })
            .Produces<List<Cart>>()
            .RequireAuthorization();

        return app;
    }
}
