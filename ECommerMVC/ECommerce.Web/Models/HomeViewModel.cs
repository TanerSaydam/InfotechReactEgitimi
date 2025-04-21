using ECommerce.Core.Entities;

namespace ECommerce.Web.Models
{
    public class HomeViewModel
    {
        public List<Product> FeaturedProducts { get; set; }
        public List<Product> NewArrivals { get; set; }
        public List<string> Categories { get; set; }
    }
} 