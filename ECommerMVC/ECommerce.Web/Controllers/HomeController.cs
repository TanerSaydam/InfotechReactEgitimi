using System.Diagnostics;
using ECommerce.Business.Interfaces;
using ECommerce.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Web.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IProductService _productService;
    private readonly ICartService _cartService;

    public HomeController(ILogger<HomeController> logger, IProductService productService, ICartService cartService)
    {
        _logger = logger;
        _productService = productService;
        _cartService = cartService;
    }

    public async Task<IActionResult> Index()
    {
        var allProducts = await _productService.GetAllProductsAsync();

        var viewModel = new HomeViewModel
        {
            // Son eklenen 8 ürün
            NewArrivals = allProducts.OrderByDescending(p => p.CreatedDate).Take(8).ToList(),

            // Fiyatı en yüksek 8 ürün
            FeaturedProducts = allProducts.OrderByDescending(p => p.Price).Take(8).ToList(),

            // Tüm kategoriler
            Categories = allProducts.Select(p => p.Name.Split(' ')[0]).Distinct().ToList()
        };

        return View(viewModel);
    }

    [HttpGet]
    public async Task<IActionResult> AddToBasket(int productId)
    {
        await _cartService.UpdateCartItemQuantityAsync("temp-user", productId, 1);
        return RedirectToAction("Index");
    }
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
