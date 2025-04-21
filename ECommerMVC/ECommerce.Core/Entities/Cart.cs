using System.ComponentModel.DataAnnotations;

namespace ECommerce.Core.Entities
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        public virtual ICollection<CartItem> Items { get; set; } = new List<CartItem>();
    }

    public class CartItem
    {
        [Key]
        public int Id { get; set; }
        public int CartId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }

        public virtual Cart Cart { get; set; }
        public virtual Product Product { get; set; }
    }
} 