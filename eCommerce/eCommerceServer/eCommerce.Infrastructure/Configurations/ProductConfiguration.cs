using eCommerce.Domain.Products;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace eCommerce.Infrastructure.Configurations;

internal sealed class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.Property(p => p.Name).HasColumnType("varchar(100)");
        builder.Property(p => p.ImageUrl).HasColumnType("varchar(200)");
        builder.Property(p => p.Description).HasColumnType("varchar(300)");
        builder.Property(p => p.Price).HasColumnType("money");
    }
}
