using System;
using System.Collections.Generic;
using System.Text;

namespace RadioCore
{
    public class Track
    {
        public Guid? Id { get; set; } = Guid.Empty;

        public Artist? ArtistOwner { get; set; }

        public string? ArtistName { get; set; } = "";

        public string? TrackName { get; set; } = "";

        public TimeSpan? Duration { get; set; } = TimeSpan.Zero;

        public DateTime? Released { get; set; }

        public Genre? Genre { get; set; }

        public string? Description { get; set; } = string.Empty;

        public Guid? Album { get; set; } = Guid.Empty;

        public string? Art { get; set; } = "";
    }
}
