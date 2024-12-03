using Design_Patterns_Library.Models.Entities;

namespace Design_Patterns_Library.Models.DTOs
{
    public class AddDesignPatternDto
    {
        public required string Name { get; set; }
        public required int ClassificationId { get; set; }
        public required string Intent { get; set; }
        public string AlsoKnownAs { get; set; }
        public required string Motivation { get; set; }
        public required string Applicability { get; set; }
        public required string Structure { get; set; }
        public required string Participants { get; set; }
        public required string Collaborations { get; set; }
        public required string Consequences { get; set; }
        public required string Implementation { get; set; }
        public required string SampleCode { get; set; }
        public required string KnownUses { get; set; }
    }
}
