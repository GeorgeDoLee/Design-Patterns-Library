using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Design_Patterns_Library.Data;
using Design_Patterns_Library.Models.Entities;
using Design_Patterns_Library.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Design_Patterns_Library.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignPatternController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DesignPatternController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDesignPatterns()
        {
            try
            {
                var designPatterns = await _context.DesignPatterns
                    .Include(dp => dp.Classification)
                    .Include(dp => dp.RelatedPatterns)
                    .ThenInclude(rp => rp.RelatedDesignPattern)
                    .ToListAsync();

                return Ok(designPatterns);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error retrieving design patterns: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDesignPatternById(Guid id)
        {
            try
            {
                var designPattern = await _context.DesignPatterns
                    .Include(dp => dp.Classification)
                    .Include(dp => dp.RelatedPatterns)
                    .ThenInclude(rp => rp.RelatedDesignPattern)
                    .FirstOrDefaultAsync(dp => dp.Id == id);

                if (designPattern == null)
                {
                    return NotFound($"Design Pattern with ID {id} not found.");
                }

                return Ok(designPattern);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error retrieving design pattern by ID: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostDesignPattern(DesignPatternDto dto)
        {
            try
            {
                if (dto == null)
                {
                    return BadRequest("Invalid design pattern data.");
                }

                var classification = await _context.Classifications.FindAsync(dto.ClassificationId);

                if (classification == null)
                {
                    return BadRequest("Classification not found.");
                }

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
                    KnownUses = dto.KnownUses
                };

                _context.DesignPatterns.Add(designPattern);
                await _context.SaveChangesAsync();

                if (dto.RelatedPatternIds != null && dto.RelatedPatternIds.Any())
                {
                    foreach (var relatedPatternId in dto.RelatedPatternIds)
                    {
                        var relatedPattern = new RelatedPattern
                        {
                            DesignPatternId = designPattern.Id,
                            RelatedDesignPatternId = relatedPatternId
                        };

                        _context.RelatedPatterns.Add(relatedPattern);
                    }
                    await _context.SaveChangesAsync();
                }

                return CreatedAtAction(nameof(GetDesignPatternById), new { id = designPattern.Id }, designPattern);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error creating design pattern: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDesignPattern(Guid id, DesignPatternDto dto)
        {
            try
            {
                if (dto == null || id == Guid.Empty)
                {
                    return BadRequest("Invalid design pattern data or ID mismatch.");
                }

                var existingDesignPattern = await _context.DesignPatterns.FindAsync(id);

                if (existingDesignPattern == null)
                {
                    return NotFound($"Design Pattern with ID {id} not found.");
                }

                existingDesignPattern.Name = dto.Name;
                existingDesignPattern.Intent = dto.Intent;
                existingDesignPattern.AlsoKnownAs = dto.AlsoKnownAs;
                existingDesignPattern.Motivation = dto.Motivation;
                existingDesignPattern.Applicability = dto.Applicability;
                existingDesignPattern.Structure = dto.Structure;
                existingDesignPattern.Participants = dto.Participants;
                existingDesignPattern.Collaborations = dto.Collaborations;
                existingDesignPattern.Consequences = dto.Consequences;
                existingDesignPattern.Implementation = dto.Implementation;
                existingDesignPattern.SampleCode = dto.SampleCode;
                existingDesignPattern.KnownUses = dto.KnownUses;
                existingDesignPattern.ClassificationId = dto.ClassificationId;

                await _context.SaveChangesAsync();

                var currentRelatedPatterns = await _context.RelatedPatterns
                    .Where(rp => rp.DesignPatternId == id)
                    .ToListAsync();

                _context.RelatedPatterns.RemoveRange(currentRelatedPatterns);

                if (dto.RelatedPatternIds != null && dto.RelatedPatternIds.Any())
                {
                    foreach (var relatedPatternId in dto.RelatedPatternIds)
                    {
                        var relatedPattern = new RelatedPattern
                        {
                            DesignPatternId = id,
                            RelatedDesignPatternId = relatedPatternId
                        };
                        _context.RelatedPatterns.Add(relatedPattern);
                    }
                    await _context.SaveChangesAsync();
                }

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error updating design pattern: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDesignPattern(Guid id)
        {
            try
            {
                var designPattern = await _context.DesignPatterns.FindAsync(id);

                if (designPattern == null)
                {
                    return NotFound($"Design Pattern with ID {id} not found.");
                }

                var relatedPatterns = await _context.RelatedPatterns
                    .Where(rp => rp.DesignPatternId == id || rp.RelatedDesignPatternId == id)
                    .ToListAsync();

                _context.RelatedPatterns.RemoveRange(relatedPatterns);
                _context.DesignPatterns.Remove(designPattern);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error deleting design pattern: {ex.Message}");
            }
        }
    }
}
