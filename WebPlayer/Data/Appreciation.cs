namespace WebPlayer.Data
{
    public class Appreciation
    {
        public Guid? Id { get; set; } = Guid.Empty;
        
        public string? Name { get; set; } = "";
        
        public string? Description { get; set; } = "";

        public string? Title { get; set; } = "";

        public string? Body { get; set; } = "";

        public string? From { get; set; } = "Anonymous";

        public string? Icon { get; set; } = "";
         
    }
}
