using ECommerce.Business.Interfaces;
using ECommerce.Core.Entities;
using ECommerce.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Business.Services;

public class CartService : ICartService
{
    private readonly ECommerceDbContext _context;
    private readonly IProductService _productService;

    public CartService(ECommerceDbContext context, IProductService productService)
    {
        _context = context;
        _productService = productService;
    }

    public async Task<Cart> GetCartAsync(string userId)
    {
        var cart = await _context.Carts
            .Include(c => c.Items)
            .ThenInclude(ci => ci.Product)
            .FirstOrDefaultAsync(c => c.UserId == userId);

        if (cart == null)
        {
            cart = new Cart { UserId = userId };
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
        }

        return cart;
    }

    public async Task<Cart> AddToCartAsync(string userId, int productId, int quantity = 1)
    {
        var cart = await GetCartAsync(userId);
        var product = await _productService.GetProductByIdAsync(productId);

        if (product == null)
            throw new ArgumentException("Product not found");

        var cartItem = cart.Items.FirstOrDefault(ci => ci.ProductId == productId);

        if (cartItem != null)
        {
            cartItem.Quantity += quantity;
        }
        else
        {
            cartItem = new CartItem
            {
                ProductId = productId,
                Quantity = quantity,
                UnitPrice = product.Price
            };
            cart.Items.Add(cartItem);
        }

        await _context.SaveChangesAsync();
        return cart;
    }

    public async Task<Cart> RemoveFromCartAsync(string userId, int productId)
    {
        var cart = await GetCartAsync(userId);
        var cartItem = cart.Items.FirstOrDefault(ci => ci.ProductId == productId);

        if (cartItem != null)
        {
            cart.Items.Remove(cartItem);
            await _context.SaveChangesAsync();
        }

        return cart;
    }

    public async Task<Cart> UpdateCartItemQuantityAsync(string userId, int productId, int quantity)
    {
        var cart = await GetCartAsync(userId);
        var cartItem = cart.Items.FirstOrDefault(ci => ci.ProductId == productId);

        var product = await _productService.GetProductByIdAsync(productId);

        if (cartItem != null)
        {
            if (quantity <= 0)
            {
                cart.Items.Remove(cartItem);
            }
            else
            {
                cartItem.Quantity += quantity;
            }
            await _context.SaveChangesAsync();
        }
        else
        {
            CartItem newCartItem = new()
            {
                CartId = cart.Id,
                ProductId = productId,
                Quantity = quantity,
                UnitPrice = product.Price,
            };
            _context.Add(newCartItem);
            await _context.SaveChangesAsync();
        }

        return cart;
    }

    public async Task ClearCartAsync(string userId)
    {
        var cart = await GetCartAsync(userId);
        cart.Items.Clear();
        await _context.SaveChangesAsync();
    }

    public async Task<Cart> GetCartWithItemsAsync(string userId)
    {
        return await _context.Carts
            .Include(c => c.Items)
            .ThenInclude(ci => ci.Product)
            .FirstOrDefaultAsync(c => c.UserId == userId);
    }
}
