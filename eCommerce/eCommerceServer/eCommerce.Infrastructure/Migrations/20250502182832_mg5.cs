using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eCommerce.Infrastructure.Migrations;

/// <inheritdoc />
public partial class mg5 : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Carts",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                Quantity = table.Column<int>(type: "int", nullable: false),
                CreatedById = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                CreatedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                ModifiedById = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                ModifiedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                DeletedById = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                DeletedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Carts", x => x.Id);
                table.ForeignKey(
                    name: "FK_Carts_Products_ProductId",
                    column: x => x.ProductId,
                    principalTable: "Products",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.NoAction);
            });

        migrationBuilder.CreateIndex(
            name: "IX_Carts_ProductId",
            table: "Carts",
            column: "ProductId");
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "Carts");
    }
}
