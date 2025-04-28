using eCommerce.Domain.Abstractions;
using eCommerce.Domain.Categories;
using eCommerce.Domain.Products;
using GenericRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Infrastructure.Context;
internal sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var entries = ChangeTracker.Entries<Entity>();
        if (!entries.Any()) return base.SaveChangesAsync(cancellationToken);

        HttpContextAccessor httpContextAccessor = new();
        string userIdString = "df4eadf2-2036-4f73-b490-589ce5e88681";
        //httpContextAccessor
        //.HttpContext!
        //.User
        //.Claims
        //.First(p => p.Type == ClaimTypes.NameIdentifier)
        //.Value;

        Guid userId = Guid.Parse(userIdString);

        foreach (var entry in entries)
        {
            if (entry.State == EntityState.Added)
            {
                entry.Property(p => p.CreatedOn)
                    .CurrentValue = DateTimeOffset.Now;
                entry.Property(p => p.CreatedById)
                    .CurrentValue = userId;
            }

            if (entry.State == EntityState.Modified)
            {
                if (entry.Property(p => p.IsDeleted).CurrentValue == true)
                {
                    entry.Property(p => p.DeletedOn)
                    .CurrentValue = DateTimeOffset.Now;
                    entry.Property(p => p.DeletedById)
                    .CurrentValue = userId;
                }
                else
                {
                    entry.Property(p => p.ModifiedOn)
                        .CurrentValue = DateTimeOffset.Now;
                    entry.Property(p => p.ModifiedById)
                    .CurrentValue = userId;
                }
            }

            if (entry.State == EntityState.Deleted)
            {
                throw new ArgumentException("Db'den direkt silme işlemi yapamazsınız");
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }
}