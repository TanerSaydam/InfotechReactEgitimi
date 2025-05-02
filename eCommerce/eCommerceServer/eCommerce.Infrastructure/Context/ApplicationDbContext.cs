using eCommerce.Domain.Abstractions;
using eCommerce.Domain.Carts;
using eCommerce.Domain.Categories;
using eCommerce.Domain.Products;
using eCommerce.Domain.Users;
using GenericRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Infrastructure.Context;
internal sealed class ApplicationDbContext : IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>, IUnitOfWork
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Cart> Carts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);

        modelBuilder.Ignore<IdentityUserLogin<Guid>>();
        modelBuilder.Ignore<IdentityRoleClaim<Guid>>();
        modelBuilder.Ignore<IdentityUserToken<Guid>>();
        modelBuilder.Ignore<IdentityUserRole<Guid>>();
        modelBuilder.Ignore<IdentityUserClaim<Guid>>();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var entries = ChangeTracker.Entries<Entity>();
        if (!entries.Any()) return base.SaveChangesAsync(cancellationToken);

        HttpContextAccessor httpContextAccessor = new();
        //string userIdString = "df4eadf2-2036-4f73-b490-589ce5e88681";
        string userIdString = httpContextAccessor
        .HttpContext!
        .User
        .Claims
        .First(p => p.Type == "userId")
        .Value;

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