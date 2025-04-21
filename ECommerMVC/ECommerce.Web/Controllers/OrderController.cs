using ECommerce.Business.Interfaces;
using ECommerce.Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Web.Controllers
{
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        public async Task<IActionResult> Index()
        {
            // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
            var userId = "temp-user";
            var orders = await _orderService.GetUserOrdersAsync(userId);
            return View(orders);
        }

        public async Task<IActionResult> Details(int id)
        {
            var order = await _orderService.GetOrderByIdAsync(id);
            if (order == null)
                return NotFound();

            return View(order);
        }

        [HttpGet]
        public IActionResult Checkout()
        {
            var order = new Order();
            return View(order);
        }

        [HttpPost]
        public async Task<IActionResult> Checkout(Order order)
        {
            if (!ModelState.IsValid)
                return View(order);

            try
            {
                // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
                var userId = "temp-user";
                var createdOrder = await _orderService.CreateOrderFromCartAsync(userId, order);

                // TODO: Implement real payment processing
                // For now, we'll just simulate a successful payment
                await _orderService.UpdatePaymentStatusAsync(createdOrder.Id, "Completed");
                await _orderService.UpdateOrderStatusAsync(createdOrder.Id, "Processing");

                return RedirectToAction(nameof(Confirmation), new { id = createdOrder.Id });
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return View(order);
            }
        }

        public async Task<IActionResult> Confirmation(int id)
        {
            var order = await _orderService.GetOrderByIdAsync(id);
            if (order == null)
                return NotFound();

            return View(order);
        }
    }
} 