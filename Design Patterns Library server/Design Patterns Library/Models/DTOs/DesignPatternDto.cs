using System;
using System.Collections.Generic;

namespace Design_Patterns_Library.Models.DTOs
{
    public class DesignPatternDto
    {
        public string Name { get; set; }
        public Guid ClassificationId { get; set; }
        public string Intent { get; set; }
        public string AlsoKnownAs { get; set; }
        public string Motivation { get; set; }
        public string Applicability { get; set; }
        public string Structure { get; set; }
        public string Participants { get; set; }
        public string Collaborations { get; set; }
        public string Consequences { get; set; }
        public string Implementation { get; set; }
        public string SampleCode { get; set; }
        public string KnownUses { get; set; }
    }
}


