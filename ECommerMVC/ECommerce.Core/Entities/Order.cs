using System.ComponentModel.DataAnnotations;

namespace ECommerce.Core.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        public string OrderNumber { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Now;
        public decimal TotalAmount { get; set; }
        public string Status { get; set; } = "Pending"; // Pending, Processing, Shipped, Delivered, Cancelled
        
        // Shipping Information
        public string ShippingName { get; set; }
        public string ShippingEmail { get; set; }
        public string ShippingPhone { get; set; }
        public string ShippingAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingZipCode { get; set; }

        // Payment Information
        public string PaymentMethod { get; set; }
        public string PaymentStatus { get; set; } = "Pending"; // Pending, Completed, Failed
        public DateTime? PaymentDate { get; set; }

        public virtual ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
    }

    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }

        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
} 