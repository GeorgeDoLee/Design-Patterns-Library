using Design_Patterns_Library.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Design_Patterns_Library.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<DesignPattern> DesignPatterns { get; set; }
        public DbSet<Classification> Classifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DesignPattern>()
                .HasOne(dp => dp.Classification)
                .WithMany()
                .HasForeignKey(dp => dp.ClassificationId);

            base.OnModelCreating(modelBuilder);
        }
    }
}