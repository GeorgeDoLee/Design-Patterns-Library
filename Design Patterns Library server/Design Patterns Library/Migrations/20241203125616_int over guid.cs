using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Design_Patterns_Library.Migrations
{
    /// <inheritdoc />
    public partial class intoverguid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Classifications",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DesignPatterns",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Intent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AlsoKnownAs = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Motivation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Applicability = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Structure = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Participants = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Collaborations = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Consequences = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Implementation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SampleCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KnownUses = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClassificationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DesignPatterns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DesignPatterns_Classifications_ClassificationId",
                        column: x => x.ClassificationId,
                        principalTable: "Classifications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DesignPatterns_ClassificationId",
                table: "DesignPatterns",
                column: "ClassificationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DesignPatterns");

            migrationBuilder.DropTable(
                name: "Classifications");
        }
    }
}
