using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ECommerce.Data.Migrations
{
    /// <inheritdoc />
    public partial class SeedProductData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "CreatedDate", "Description", "ImageUrl", "IsActive", "Name", "Price", "Stock", "UpdatedDate" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 1, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 1. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 1", 16.49m, 102, null },
                    { 2, new DateTime(2024, 1, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 2. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 2", 21.99m, 104, null },
                    { 3, new DateTime(2024, 1, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 3. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 3", 27.49m, 106, null },
                    { 4, new DateTime(2024, 1, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 4. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 4", 32.99m, 108, null },
                    { 5, new DateTime(2024, 1, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 5. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 5", 38.49m, 110, null },
                    { 6, new DateTime(2024, 1, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 6. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 6", 43.99m, 112, null },
                    { 7, new DateTime(2024, 1, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 7. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 7", 49.49m, 114, null },
                    { 8, new DateTime(2024, 1, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 8. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 8", 54.99m, 116, null },
                    { 9, new DateTime(2024, 1, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 9. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 9", 60.49m, 118, null },
                    { 10, new DateTime(2024, 1, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 10. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 10", 65.99m, 120, null },
                    { 11, new DateTime(2024, 1, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 11. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 11", 71.49m, 122, null },
                    { 12, new DateTime(2024, 1, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 12. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 12", 76.99m, 124, null },
                    { 13, new DateTime(2024, 1, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 13. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 13", 82.49m, 126, null },
                    { 14, new DateTime(2024, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 14. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 14", 87.99m, 128, null },
                    { 15, new DateTime(2024, 1, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 15. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 15", 93.49m, 130, null },
                    { 16, new DateTime(2024, 1, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 16. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 16", 98.99m, 132, null },
                    { 17, new DateTime(2024, 1, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 17. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 17", 104.49m, 134, null },
                    { 18, new DateTime(2024, 1, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 18. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 18", 109.99m, 136, null },
                    { 19, new DateTime(2024, 1, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 19. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 19", 115.49m, 138, null },
                    { 20, new DateTime(2024, 1, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 20. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 20", 120.99m, 140, null },
                    { 21, new DateTime(2024, 1, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 21. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 21", 126.49m, 142, null },
                    { 22, new DateTime(2024, 1, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 22. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 22", 131.99m, 144, null },
                    { 23, new DateTime(2024, 1, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 23. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 23", 137.49m, 146, null },
                    { 24, new DateTime(2024, 1, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 24. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 24", 142.99m, 148, null },
                    { 25, new DateTime(2024, 1, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 25. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 25", 148.49m, 150, null },
                    { 26, new DateTime(2024, 1, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 26. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 26", 153.99m, 152, null },
                    { 27, new DateTime(2024, 1, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 27. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 27", 159.49m, 154, null },
                    { 28, new DateTime(2024, 1, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 28. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 28", 164.99m, 156, null },
                    { 29, new DateTime(2024, 1, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 29. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 29", 170.49m, 158, null },
                    { 30, new DateTime(2024, 1, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 30. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 30", 175.99m, 160, null },
                    { 31, new DateTime(2024, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 31. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 31", 181.49m, 162, null },
                    { 32, new DateTime(2024, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 32. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 32", 186.99m, 164, null },
                    { 33, new DateTime(2024, 2, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 33. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 33", 192.49m, 166, null },
                    { 34, new DateTime(2024, 2, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 34. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 34", 197.99m, 168, null },
                    { 35, new DateTime(2024, 2, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 35. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 35", 203.49m, 170, null },
                    { 36, new DateTime(2024, 2, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 36. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 36", 208.99m, 172, null },
                    { 37, new DateTime(2024, 2, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 37. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 37", 214.49m, 174, null },
                    { 38, new DateTime(2024, 2, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 38. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 38", 219.99m, 176, null },
                    { 39, new DateTime(2024, 2, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 39. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 39", 225.49m, 178, null },
                    { 40, new DateTime(2024, 2, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 40. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 40", 230.99m, 180, null },
                    { 41, new DateTime(2024, 2, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 41. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 41", 236.49m, 182, null },
                    { 42, new DateTime(2024, 2, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 42. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 42", 241.99m, 184, null },
                    { 43, new DateTime(2024, 2, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 43. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 43", 247.49m, 186, null },
                    { 44, new DateTime(2024, 2, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 44. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 44", 252.99m, 188, null },
                    { 45, new DateTime(2024, 2, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 45. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 45", 258.49m, 190, null },
                    { 46, new DateTime(2024, 2, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 46. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 46", 263.99m, 192, null },
                    { 47, new DateTime(2024, 2, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 47. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 47", 269.49m, 194, null },
                    { 48, new DateTime(2024, 2, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 48. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 48", 274.99m, 196, null },
                    { 49, new DateTime(2024, 2, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 49. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 49", 280.49m, 198, null },
                    { 50, new DateTime(2024, 2, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 50. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 50", 285.99m, 200, null },
                    { 51, new DateTime(2024, 2, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 51. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 51", 291.49m, 202, null },
                    { 52, new DateTime(2024, 2, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 52. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 52", 296.99m, 204, null },
                    { 53, new DateTime(2024, 2, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 53. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 53", 302.49m, 206, null },
                    { 54, new DateTime(2024, 2, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 54. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 54", 307.99m, 208, null },
                    { 55, new DateTime(2024, 2, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 55. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 55", 313.49m, 210, null },
                    { 56, new DateTime(2024, 2, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 56. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 56", 318.99m, 212, null },
                    { 57, new DateTime(2024, 2, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 57. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 57", 324.49m, 214, null },
                    { 58, new DateTime(2024, 2, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 58. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 58", 329.99m, 216, null },
                    { 59, new DateTime(2024, 2, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 59. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 59", 335.49m, 218, null },
                    { 60, new DateTime(2024, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 60. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 60", 340.99m, 220, null },
                    { 61, new DateTime(2024, 3, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 61. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 61", 346.49m, 222, null },
                    { 62, new DateTime(2024, 3, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 62. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 62", 351.99m, 224, null },
                    { 63, new DateTime(2024, 3, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 63. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 63", 357.49m, 226, null },
                    { 64, new DateTime(2024, 3, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 64. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 64", 362.99m, 228, null },
                    { 65, new DateTime(2024, 3, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 65. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 65", 368.49m, 230, null },
                    { 66, new DateTime(2024, 3, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 66. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 66", 373.99m, 232, null },
                    { 67, new DateTime(2024, 3, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 67. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 67", 379.49m, 234, null },
                    { 68, new DateTime(2024, 3, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 68. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 68", 384.99m, 236, null },
                    { 69, new DateTime(2024, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 69. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 69", 390.49m, 238, null },
                    { 70, new DateTime(2024, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 70. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 70", 395.99m, 240, null },
                    { 71, new DateTime(2024, 3, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 71. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 71", 401.49m, 242, null },
                    { 72, new DateTime(2024, 3, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 72. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 72", 406.99m, 244, null },
                    { 73, new DateTime(2024, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 73. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 73", 412.49m, 246, null },
                    { 74, new DateTime(2024, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 74. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 74", 417.99m, 248, null },
                    { 75, new DateTime(2024, 3, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 75. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 75", 423.49m, 250, null },
                    { 76, new DateTime(2024, 3, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 76. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 76", 428.99m, 252, null },
                    { 77, new DateTime(2024, 3, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 77. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 77", 434.49m, 254, null },
                    { 78, new DateTime(2024, 3, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 78. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 78", 439.99m, 256, null },
                    { 79, new DateTime(2024, 3, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 79. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 79", 445.49m, 258, null },
                    { 80, new DateTime(2024, 3, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 80. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 80", 450.99m, 260, null },
                    { 81, new DateTime(2024, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 81. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 81", 456.49m, 262, null },
                    { 82, new DateTime(2024, 3, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 82. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 82", 461.99m, 264, null },
                    { 83, new DateTime(2024, 3, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 83. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 83", 467.49m, 266, null },
                    { 84, new DateTime(2024, 3, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 84. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 84", 472.99m, 268, null },
                    { 85, new DateTime(2024, 3, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 85. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 85", 478.49m, 270, null },
                    { 86, new DateTime(2024, 3, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 86. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 86", 483.99m, 272, null },
                    { 87, new DateTime(2024, 3, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 87. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 87", 489.49m, 274, null },
                    { 88, new DateTime(2024, 3, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 88. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 88", 494.99m, 276, null },
                    { 89, new DateTime(2024, 3, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 89. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 89", 500.49m, 278, null },
                    { 90, new DateTime(2024, 3, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 90. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 90", 505.99m, 280, null },
                    { 91, new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 91. It comes with great features and quality.", "/images/products/product2.jpg", true, "Clothing Product 91", 511.49m, 282, null },
                    { 92, new DateTime(2024, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 92. It comes with great features and quality.", "/images/products/product3.jpg", true, "Books Product 92", 516.99m, 284, null },
                    { 93, new DateTime(2024, 4, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 93. It comes with great features and quality.", "/images/products/product4.jpg", true, "Home & Garden Product 93", 522.49m, 286, null },
                    { 94, new DateTime(2024, 4, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 94. It comes with great features and quality.", "/images/products/product5.jpg", true, "Sports Product 94", 527.99m, 288, null },
                    { 95, new DateTime(2024, 4, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 95. It comes with great features and quality.", "/images/products/product6.jpg", true, "Electronics Product 95", 533.49m, 290, null },
                    { 96, new DateTime(2024, 4, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample clothing product with ID 96. It comes with great features and quality.", "/images/products/product7.jpg", true, "Clothing Product 96", 538.99m, 292, null },
                    { 97, new DateTime(2024, 4, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample books product with ID 97. It comes with great features and quality.", "/images/products/product8.jpg", true, "Books Product 97", 544.49m, 294, null },
                    { 98, new DateTime(2024, 4, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample home & garden product with ID 98. It comes with great features and quality.", "/images/products/product9.jpg", true, "Home & Garden Product 98", 549.99m, 296, null },
                    { 99, new DateTime(2024, 4, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample sports product with ID 99. It comes with great features and quality.", "/images/products/product10.jpg", true, "Sports Product 99", 555.49m, 298, null },
                    { 100, new DateTime(2024, 4, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample electronics product with ID 100. It comes with great features and quality.", "/images/products/product1.jpg", true, "Electronics Product 100", 560.99m, 300, null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 66);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 67);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 68);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 69);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 70);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 71);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 72);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 73);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 74);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 75);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 76);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 77);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 78);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 79);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 80);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 81);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 82);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 83);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 84);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 85);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 86);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 87);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 88);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 89);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 90);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 91);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 92);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 93);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 94);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 95);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 96);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 97);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 98);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 99);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 100);
        }
    }
}
