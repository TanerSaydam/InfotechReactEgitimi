using ECommerce.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Web.ViewComponents
{
    public class OrderSummaryViewComponent : ViewComponent
    {
        private readonly ICartService _cartService;

        public OrderSummaryViewComponent(ICartService cartService)
        {
            _cartService = cartService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            // TODO: Gerçek kullanıcı ID'si ile değiştirilecek
            var userId = "temp-user";
            var cart = await _cartService.GetCartAsync(userId);
            return View(cart);
        }
    }
} 