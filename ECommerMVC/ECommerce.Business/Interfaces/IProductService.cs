using ECommerce.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ECommerce.Business.Interfaces
{
    public interface IProductService
    {
        Task<List<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        Task<Product> CreateProductAsync(Product product);
        Task<Product> UpdateProductAsync(Product product);
        Task DeleteProductAsync(int id);
    }
} 