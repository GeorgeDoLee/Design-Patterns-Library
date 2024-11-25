namespace Design_Patterns_Library.Models.Entities
{
    public class RelatedPattern
    {
        public Guid DesignPatternId { get; set; }
        public DesignPattern DesignPattern { get; set; }
        public Guid RelatedDesignPatternId { get; set; }
        public DesignPattern RelatedDesignPattern { get; set; }
    }

}
