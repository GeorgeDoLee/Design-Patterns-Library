using Design_Patterns_Library.Data;
using Design_Patterns_Library.Models.DTOs;
using Design_Patterns_Library.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Design_Patterns_Library.Services
{
    public class ClassificationService
    {
        private readonly ApplicationDbContext _dbContext;

        public ClassificationService(ApplicationDbContext context)
        {
            _dbContext = context;
        }


        public async Task<Classification> AddClassificationAsync(AddClassificationDto dto)
        {
            var classification = new Classification
            {
                Name = dto.Name,
                Description = dto.Description,
                Photo = ""
            };

            _dbContext.Classifications.Add(classification);
            await _dbContext.SaveChangesAsync();

            return classification;
        }


        public async Task<Classification> UpdateClassificationAsync(int id, UpdateClassificationDto dto)
        {
            var classification = await GetClassificationByIdAsync(id);

            if (classification == null)
            {
                return null;
            }

            classification.Name = dto.Name;
            classification.Description = dto.Description;

            _dbContext.Update(classification);
            await _dbContext.SaveChangesAsync();

            return classification;
        }


        public async Task<bool> RemoveClassificationAsync(int id)
        {
            var classification = await GetClassificationByIdAsync(id);

            if(classification != null)
            {
                _dbContext.Classifications.Remove(classification);
                await _dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }


        public async Task<Classification> GetClassificationByIdAsync(int id)
        {
            var classification = await _dbContext.Classifications.FindAsync(id);

            return classification;
        }

        public async Task<List<Classification>> GetAllClassificationsAsync()
        {
            var classifications = await _dbContext.Classifications.ToListAsync();

            return classifications;
        }
    }
}
