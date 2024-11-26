using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Design_Patterns_Library.Migrations
{
    /// <inheritdoc />
    public partial class removedrelatedpatterns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RelatedPatterns");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RelatedPatterns",
                columns: table => new
                {
                    DesignPatternId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RelatedDesignPatternId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelatedPatterns", x => new { x.DesignPatternId, x.RelatedDesignPatternId });
                    table.ForeignKey(
                        name: "FK_RelatedPatterns_DesignPatterns_DesignPatternId",
                        column: x => x.DesignPatternId,
                        principalTable: "DesignPatterns",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RelatedPatterns_DesignPatterns_RelatedDesignPatternId",
                        column: x => x.RelatedDesignPatternId,
                        principalTable: "DesignPatterns",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RelatedPatterns_RelatedDesignPatternId",
                table: "RelatedPatterns",
                column: "RelatedDesignPatternId");
        }
    }
}
