using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Design_Patterns_Library.Data;
using Design_Patterns_Library.Models.Entities;
using Design_Patterns_Library.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Design_Patterns_Library.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassificationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ClassificationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllClassifications()
        {
            try
            {
                var classifications = await _context.Classifications.ToListAsync();

                return Ok(classifications);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error retrieving classifications: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetClassificationById(Guid id)
        {
            try
            {
                var classification = await _context.Classifications.FindAsync(id);

                if (classification == null)
                {
                    return NotFound($"Classification with ID {id} not found.");
                }


                return Ok(classification);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error retrieving classification by ID: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostClassification(ClassificationDto dto)
        {
            try
            {
                if (dto == null)
                {
                    return BadRequest("Invalid classification data.");
                }

                var classification = new Classification
                {
                    Name = dto.Name,
                    Description = dto.Description,
                    Purpose = dto.Purpose,
                    Scope = dto.Scope
                };

                _context.Classifications.Add(classification);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetClassificationById), new { id = classification.Id }, classification);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error creating classification: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClassification(Guid id, ClassificationDto dto)
        {
            try
            {
                if (dto == null || id == Guid.Empty)
                {
                    return BadRequest("Invalid classification data or ID mismatch.");
                }

                var existingClassification = await _context.Classifications.FindAsync(id);

                if (existingClassification == null)
                {
                    return NotFound($"Classification with ID {id} not found.");
                }

                existingClassification.Name = dto.Name;
                existingClassification.Description = dto.Description;
                existingClassification.Purpose = dto.Purpose;
                existingClassification.Scope = dto.Scope;

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error updating classification: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClassification(Guid id)
        {
            try
            {
                var classification = await _context.Classifications.FindAsync(id);

                if (classification == null)
                {
                    return NotFound($"Classification with ID {id} not found.");
                }

                _context.Classifications.Remove(classification);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error deleting classification: {ex.Message}");
            }
        }
    }
}
