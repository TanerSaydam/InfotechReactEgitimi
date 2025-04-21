using ECommerce.Core.Entities;
using ECommerce.Data.Context;
using ECommerce.Business.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Business.Services
{
    public class OrderService : IOrderService
    {
        private readonly ECommerceDbContext _context;
        private readonly ICartService _cartService;

        public OrderService(ECommerceDbContext context, ICartService cartService)
        {
            _context = context;
            _cartService = cartService;
        }

        public async Task<Order> CreateOrderFromCartAsync(string userId, Order orderDetails)
        {
            var cart = await _cartService.GetCartAsync(userId);
            if (cart?.Items == null || !cart.Items.Any())
                throw new InvalidOperationException("Cart is empty");

            // Generate order number
            var orderNumber = $"ORD-{DateTime.Now:yyyyMMdd}-{Guid.NewGuid().ToString().Substring(0, 8)}";

            // Create order
            var order = new Order
            {
                UserId = userId,
                OrderNumber = orderNumber,
                OrderDate = DateTime.Now,
                TotalAmount = cart.Items.Sum(i => i.Quantity * i.UnitPrice),
                Status = "Pending",
                ShippingName = orderDetails.ShippingName,
                ShippingEmail = orderDetails.ShippingEmail,
                ShippingPhone = orderDetails.ShippingPhone,
                ShippingAddress = orderDetails.ShippingAddress,
                ShippingCity = orderDetails.ShippingCity,
                ShippingZipCode = orderDetails.ShippingZipCode,
                PaymentMethod = orderDetails.PaymentMethod,
                PaymentStatus = "Pending"
            };

            // Create order items
            foreach (var cartItem in cart.Items)
            {
                var orderItem = new OrderItem
                {
                    ProductId = cartItem.ProductId,
                    ProductName = cartItem.Product.Name,
                    UnitPrice = cartItem.UnitPrice,
                    Quantity = cartItem.Quantity,
                    TotalPrice = cartItem.Quantity * cartItem.UnitPrice
                };
                order.Items.Add(orderItem);
            }

            // Save order
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Clear cart
            await _cartService.ClearCartAsync(userId);

            return order;
        }

        public async Task<Order> GetOrderByIdAsync(int orderId)
        {
            return await _context.Orders
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == orderId);
        }

        public async Task<List<Order>> GetUserOrdersAsync(string userId)
        {
            return await _context.Orders
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .Where(o => o.UserId == userId)
                .OrderByDescending(o => o.OrderDate)
                .ToListAsync();
        }

        public async Task<Order> UpdateOrderStatusAsync(int orderId, string status)
        {
            var order = await GetOrderByIdAsync(orderId);
            if (order == null)
                throw new ArgumentException("Order not found");

            order.Status = status;
            await _context.SaveChangesAsync();
            return order;
        }

        public async Task<Order> UpdatePaymentStatusAsync(int orderId, string paymentStatus)
        {
            var order = await GetOrderByIdAsync(orderId);
            if (order == null)
                throw new ArgumentException("Order not found");

            order.PaymentStatus = paymentStatus;
            if (paymentStatus == "Completed")
            {
                order.PaymentDate = DateTime.Now;
            }
            await _context.SaveChangesAsync();
            return order;
        }
    }
} 