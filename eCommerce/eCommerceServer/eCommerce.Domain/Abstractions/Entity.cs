namespace eCommerce.Domain.Abstractions;
public abstract class Entity
{
    protected Entity()
    {
        Id = Guid.CreateVersion7();
    }
    public Guid Id { get; set; }
    public Guid CreatedById { get; set; }
    public DateTimeOffset CreatedOn { get; set; }
    public Guid? ModifiedById { get; set; }
    public DateTimeOffset? ModifiedOn { get; set; }
    public bool IsDeleted { get; set; }
    public Guid? DeletedById { get; set; }
    public DateTimeOffset? DeletedOn { get; set; }
}