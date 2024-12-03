using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Design_Patterns_Library.Data;
using Design_Patterns_Library.Models.Entities;
using Design_Patterns_Library.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Design_Patterns_Library.Services;

namespace Design_Patterns_Library.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassificationController : ControllerBase
    {
        private readonly ClassificationService _classificationService;
        public ClassificationController(ClassificationService classificationService)
        {
            _classificationService = classificationService;
        }


        [HttpPost]
        public async Task<IActionResult> AddClassification(AddClassificationDto dto)
        {
            var classification = await _classificationService.AddClassificationAsync(dto);

            if(classification == null)
            {
                return BadRequest("Error Creating Classification.");
            }

            return Ok(classification);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClassification(int id, UpdateClassificationDto dto)
        {
            var updatedClassification = await _classificationService.UpdateClassificationAsync(id, dto);

            if(updatedClassification == null)
            {
                return BadRequest("Error Occurred While Trying To Update Classification.");
            }

            return Ok(updatedClassification);
        }


        [HttpPost("upload-icon/{id}")]
        public async Task<IActionResult> UploadClassifcationIcon(int id, IFormFile file)
        {
            var classification = await _classificationService.UploadClassificationIconAsync(id, file);

            if(classification == null)
            {
                return NotFound("Classification Not Found.");
            }

            return Ok(classification);
        }


        [HttpDelete("delete-icon/{id}")]
        public async Task<IActionResult> DeleteClassificationIcon(int id)
        {
            var classification = await _classificationService.DeleteClassificationIconAsync(id);

            if(classification == null)
            {
                return NotFound("Classification Not Found.");
            }

            return Ok(classification);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveClassification(int id)
        {
            var classificationRemoved = await _classificationService.RemoveClassificationAsync(id);


            return classificationRemoved ? 
                Ok("Classification Removed Successfully.") 
                : 
                BadRequest("Error Occured While Trying To Remove Classification.");
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetClassificationById(int id)
        {
            var classification = await _classificationService.GetClassificationByIdAsync(id);

            if(classification == null)
            {
                return NotFound("Classification Not Found.");
            }

            return Ok(classification);
        }


        [HttpGet]
        public async Task<IActionResult> GetAllClassifications()
        {
            var classifications = await _classificationService.GetAllClassificationsAsync();

            if(classifications == null || !classifications.Any())
            {
                return NotFound("No Classification Found.");
            }

            return Ok(classifications);
        }
    }
}
