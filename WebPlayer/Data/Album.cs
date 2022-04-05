namespace WebPlayer.Data
{
    public class Album
    {
        public Guid? Id { get; set; } = Guid.Empty;

        public Artist? ArtistOwner { get; set; }

        public string? ArtistName { get; set; } = "";

        public string? AlbumName { get; set; } = "";

        public DateTime? Released { get; set; }

        public Genre? Genre { get; set; }

        public string? Description { get; set; } = string.Empty;

        public string? Art { get; set; } = "";

        public List<Guid>? Tracks { get; set; } = new List<Guid>();
    }
}
