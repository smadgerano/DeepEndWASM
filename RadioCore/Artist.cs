using System;
using System.Collections.Generic;
using System.Text;

namespace RadioCore
{
    public class Artist
    {
        public Guid? Id { get; set; } = Guid.Empty;

        public string? ArtistName { get; set; } = "";

        public string? DiscordHandle { get; set; } = "";

        public string? ProfileImageBannerURL { get; set; } = "";

        public string? ProfileImageRoundedURL { get; set; } = "";

        public string? Country { get; set; } = "";

        public string? Bio { get; set; } = "";

        public string? SocialAudius { get; set; } = "";

        public string? SocialBandcamp { get; set; } = "";

        public string? SocialInstagram { get; set; } = "";

        public string? SocialSoundCloud { get; set; } = "";

        public string? SocialTwitter { get; set; } = "";

        public string? SocialYouTube { get; set; } = "";
    }
}
