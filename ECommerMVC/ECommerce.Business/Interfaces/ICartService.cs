using ECommerce.Core.Entities;

namespace ECommerce.Business.Interfaces
{
    public interface ICartService
    {
        Task<Cart> GetCartAsync(string userId);
        Task<Cart> AddToCartAsync(string userId, int productId, int quantity = 1);
        Task<Cart> RemoveFromCartAsync(string userId, int productId);
        Task<Cart> UpdateCartItemQuantityAsync(string userId, int productId, int quantity);
        Task ClearCartAsync(string userId);
    }
} 