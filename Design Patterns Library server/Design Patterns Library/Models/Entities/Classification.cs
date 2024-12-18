﻿namespace Design_Patterns_Library.Models.Entities
{
    public class Classification
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public string Icon { get; set; }
    }
}
