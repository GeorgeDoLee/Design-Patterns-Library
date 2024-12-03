using Design_Patterns_Library.Data;
using Design_Patterns_Library.Models.DTOs;
using Design_Patterns_Library.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Design_Patterns_Library.Services
{
    public class DesignPatternService
    {
        private readonly ApplicationDbContext _dbContext;

        public DesignPatternService(ApplicationDbContext context)
        {
            _dbContext = context;
        }


        public async Task<DesignPattern> AddDesignPatternAsync(AddDesignPatternDto dto)
        {
            var designPattern = new DesignPattern
            {
                Name = dto.Name,
                ClassificationId = dto.ClassificationId,
                Intent = dto.Intent,
                AlsoKnownAs = dto.AlsoKnownAs,
                Motivation = dto.Motivation,
                Applicability = dto.Applicability,
                Structure = dto.Structure,
                Participants = dto.Participants,
                Collaborations = dto.Collaborations,
                Consequences = dto.Consequences,
                Implementation = dto.Implementation,
                SampleCode = dto.SampleCode,
                KnownUses = dto.KnownUses,
                Icon = ""
            };

            _dbContext.DesignPatterns.Add(designPattern);
            await _dbContext.SaveChangesAsync();

            return designPattern;
        }


        public async Task<DesignPattern> UpdateDesignPatternAsync(int id, UpdateDesignPatternDto dto)
        {
            var designPattern = await GetDesignPatternByIdAsync(id);

            if(designPattern == null)
            {
                return null;
            }

            designPattern.Name = dto.Name;
            designPattern.ClassificationId = dto.ClassificationId;
            designPattern.Intent = dto.Intent;
            designPattern.AlsoKnownAs = dto.AlsoKnownAs;
            designPattern.Motivation = dto.Motivation;
            designPattern.Applicability = dto.Applicability;
            designPattern.Structure = dto.Structure;
            designPattern.Participants = dto.Participants;
            designPattern.Collaborations = dto.Collaborations;
            designPattern.Consequences = dto.Consequences;
            designPattern.Implementation = dto.Implementation;
            designPattern.SampleCode = dto.SampleCode;
            designPattern.KnownUses = dto.KnownUses;

            _dbContext.DesignPatterns.Update(designPattern);
            await _dbContext.SaveChangesAsync();

            return designPattern;
        }


        public async Task<bool> RemoveDesignPatternAsync(int id)
        {
            var designPattern = await GetDesignPatternByIdAsync(id);

            if(designPattern != null)
            {
                _dbContext.DesignPatterns.Remove(designPattern);
                await _dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }


        public async Task<DesignPattern> GetDesignPatternByIdAsync(int id)
        {
            var designPattern = await _dbContext.DesignPatterns
                .Include(dp => dp.Classification)
                .FirstOrDefaultAsync(dp => dp.Id == id);

            return designPattern;
        }


        public async Task<List<DesignPattern>> GetAllDesignPatternsAsync()
        {
            var designPatterns = await _dbContext.DesignPatterns.ToListAsync();

            return designPatterns;
        }
    }
}
