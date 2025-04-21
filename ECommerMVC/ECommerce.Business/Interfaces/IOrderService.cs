using ECommerce.Core.Entities;

namespace ECommerce.Business.Interfaces
{
    public interface IOrderService
    {
        Task<Order> CreateOrderFromCartAsync(string userId, Order orderDetails);
        Task<Order> GetOrderByIdAsync(int orderId);
        Task<List<Order>> GetUserOrdersAsync(string userId);
        Task<Order> UpdateOrderStatusAsync(int orderId, string status);
        Task<Order> UpdatePaymentStatusAsync(int orderId, string paymentStatus);
    }
} 