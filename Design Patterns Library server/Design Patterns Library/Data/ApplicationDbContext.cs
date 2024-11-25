using Design_Patterns_Library.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Design_Patterns_Library.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Classification> Classifications { get; set; }
        public DbSet<DesignPattern> DesignPatterns { get; set; }
        public DbSet<RelatedPattern> RelatedPatterns { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RelatedPattern>()
                .HasKey(rp => new { rp.DesignPatternId, rp.RelatedDesignPatternId });

            modelBuilder.Entity<RelatedPattern>()
                .HasOne(rp => rp.DesignPattern)
                .WithMany(dp => dp.RelatedPatterns)
                .HasForeignKey(rp => rp.DesignPatternId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<RelatedPattern>()
                .HasOne(rp => rp.RelatedDesignPattern)
                .WithMany()
                .HasForeignKey(rp => rp.RelatedDesignPatternId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}