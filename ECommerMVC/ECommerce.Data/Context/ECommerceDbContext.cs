using ECommerce.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace ECommerce.Data.Context
{
    public class ECommerceDbContext : DbContext
    {
        public ECommerceDbContext(DbContextOptions<ECommerceDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure decimal precision for Price
            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .HasPrecision(18, 2);

            modelBuilder.Entity<CartItem>()
                .Property(ci => ci.UnitPrice)
                .HasPrecision(18, 2);

            modelBuilder.Entity<Order>()
                .Property(o => o.TotalAmount)
                .HasPrecision(18, 2);

            modelBuilder.Entity<OrderItem>()
                .Property(oi => oi.UnitPrice)
                .HasPrecision(18, 2);

            modelBuilder.Entity<OrderItem>()
                .Property(oi => oi.TotalPrice)
                .HasPrecision(18, 2);

            // Seed 100 sample products
            var products = new List<Product>();
            var categories = new[] { "Electronics", "Clothing", "Books", "Home & Garden", "Sports" };
            var baseDate = new DateTime(2024, 1, 1);

            for (int i = 1; i <= 100; i++)
            {
                var categoryIndex = (i % 5);
                var category = categories[categoryIndex];
                var product = new Product
                {
                    Id = i,
                    Name = $"{category} Product {i}",
                    Description = $"This is a sample {category.ToLower()} product with ID {i}. It comes with great features and quality.",
                    Price = 10.99m + (i * 5.5m),
                    Stock = 100 + (i * 2),
                    ImageUrl = $"/images/products/product{(i % 10) + 1}.jpg",
                    CreatedDate = baseDate.AddDays(i),
                    IsActive = true
                };
                products.Add(product);
            }

            modelBuilder.Entity<Product>().HasData(products);
        }
    }
} 