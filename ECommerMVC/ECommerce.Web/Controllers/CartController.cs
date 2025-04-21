using ECommerce.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Web.Controllers
{
    public class CartController : Controller
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        public async Task<IActionResult> Index()
        {
            // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
            var userId = "temp-user";
            var cart = await _cartService.GetCartAsync(userId);
            return View(cart);
        }

        [HttpPost]
        public async Task<IActionResult> AddToCart(int productId, int quantity = 1)
        {
            try
            {
                // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
                var userId = "temp-user";
                await _cartService.AddToCartAsync(userId, productId, quantity);
                return Json(new { success = true });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> RemoveFromCart(int productId)
        {
            try
            {
                // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
                var userId = "temp-user";
                await _cartService.RemoveFromCartAsync(userId, productId);
                return Json(new { success = true });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateQuantity(int productId, int quantity)
        {
            try
            {
                // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
                var userId = "temp-user";
                await _cartService.UpdateCartItemQuantityAsync(userId, productId, quantity);
                return Json(new { success = true });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }
    }
} 