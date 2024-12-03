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
using Design_Patterns_Library.Services;

namespace Design_Patterns_Library.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignPatternController : ControllerBase
    {
        private readonly DesignPatternService _designPatternService;

        public DesignPatternController(DesignPatternService designPatternService)
        {
            _designPatternService = designPatternService;
        }

        
        [HttpPost]
        public async Task<IActionResult> AddDesignPatternn(AddDesignPatternDto dto)
        {
            var designPattern = await _designPatternService.AddDesignPatternAsync(dto);

            if(designPattern == null)
            {
                return BadRequest("Error While Creating Design Pattern.");
            }

            return Ok(designPattern);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDesignPattern(int id, UpdateDesignPatternDto dto)
        {
            var updatedDesignPattern = await _designPatternService.UpdateDesignPatternAsync(id, dto);

            if(updatedDesignPattern == null)
            {
                return NotFound("Design Pattern Not Found.");
            }

            return Ok(updatedDesignPattern);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveDesignPattern(int id)
        {
            var designPatternRemoved = await _designPatternService.RemoveDesignPatternAsync(id);

            return designPatternRemoved ? 
                Ok("Design Pattern Removed Successfully") 
                : 
                BadRequest("Error While Trying To Remove Design Pattern.");
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetDesignPatternById(int id)
        {
            var designPattern = await _designPatternService.GetDesignPatternByIdAsync(id);

            if (designPattern == null)
            {
                return NotFound("Design Pattern Not Found.");
            }

            return Ok(designPattern);
        }


        [HttpGet]
        public async Task<IActionResult> GetAllDesignPatterns()
        {
            var designPatterns = await _designPatternService.GetAllDesignPatternsAsync();

            if (designPatterns == null || !designPatterns.Any())
            {
                return NotFound("No Design Pattern Found.");
            }

            return Ok(designPatterns);
        }
    }
}
