using System;
using System.Collections.Generic;
using System.Text;

namespace RadioCore
{
    public class Globals
    {
        public static List<Genre> Genres()
        {
            var list = new List<Genre>() { };

            list.Add(new Genre() { Name = @"Blues", Description = @"Blues", SpecNumber = 0 });
            list.Add(new Genre() { Name = @"Classic Rock", Description = @"Classic Rock", SpecNumber = 1 });
            list.Add(new Genre() { Name = @"Country", Description = @"Country", SpecNumber = 2 });
            list.Add(new Genre() { Name = @"Dance", Description = @"Dance", SpecNumber = 3 });
            list.Add(new Genre() { Name = @"Disco", Description = @"Disco", SpecNumber = 4 });
            list.Add(new Genre() { Name = @"Funk", Description = @"Funk", SpecNumber = 5 });
            list.Add(new Genre() { Name = @"Grunge", Description = @"Grunge", SpecNumber = 6 });
            list.Add(new Genre() { Name = @"Hip-Hop", Description = @"Hip-Hop", SpecNumber = 7 });
            list.Add(new Genre() { Name = @"Jazz", Description = @"Jazz", SpecNumber = 8 });
            list.Add(new Genre() { Name = @"Metal", Description = @"Metal", SpecNumber = 9 });
            list.Add(new Genre() { Name = @"New Age", Description = @"New Age", SpecNumber = 10 });
            list.Add(new Genre() { Name = @"Oldies", Description = @"Oldies", SpecNumber = 11 });
            list.Add(new Genre() { Name = @"Other", Description = @"Other", SpecNumber = 12 });
            list.Add(new Genre() { Name = @"Pop", Description = @"Pop", SpecNumber = 13 });
            list.Add(new Genre() { Name = @"Rhythm and Blues", Description = @"Rhythm and Blues", SpecNumber = 14 });
            list.Add(new Genre() { Name = @"Rap", Description = @"Rap", SpecNumber = 15 });
            list.Add(new Genre() { Name = @"Reggae", Description = @"Reggae", SpecNumber = 16 });
            list.Add(new Genre() { Name = @"Rock", Description = @"Rock", SpecNumber = 17 });
            list.Add(new Genre() { Name = @"Techno", Description = @"Techno", SpecNumber = 18 });
            list.Add(new Genre() { Name = @"Industrial", Description = @"Industrial", SpecNumber = 19 });
            list.Add(new Genre() { Name = @"Alternative", Description = @"Alternative", SpecNumber = 20 });
            list.Add(new Genre() { Name = @"Ska", Description = @"Ska", SpecNumber = 21 });
            list.Add(new Genre() { Name = @"Death Metal", Description = @"Death Metal", SpecNumber = 22 });
            list.Add(new Genre() { Name = @"Pranks", Description = @"Pranks", SpecNumber = 23 });
            list.Add(new Genre() { Name = @"Soundtrack", Description = @"Soundtrack", SpecNumber = 24 });
            list.Add(new Genre() { Name = @"Euro-Techno", Description = @"Euro-Techno", SpecNumber = 25 });
            list.Add(new Genre() { Name = @"Ambient", Description = @"Ambient", SpecNumber = 26 });
            list.Add(new Genre() { Name = @"Trip-Hop", Description = @"Trip-Hop", SpecNumber = 27 });
            list.Add(new Genre() { Name = @"Vocal", Description = @"Vocal", SpecNumber = 28 });
            list.Add(new Genre() { Name = @"Jazz & Funk", Description = @"Jazz & Funk", SpecNumber = 29 });
            list.Add(new Genre() { Name = @"Fusion", Description = @"Fusion", SpecNumber = 30 });
            list.Add(new Genre() { Name = @"Trance", Description = @"Trance", SpecNumber = 31 });
            list.Add(new Genre() { Name = @"Classical", Description = @"Classical", SpecNumber = 32 });
            list.Add(new Genre() { Name = @"Instrumental", Description = @"Instrumental", SpecNumber = 33 });
            list.Add(new Genre() { Name = @"Acid", Description = @"Acid", SpecNumber = 34 });
            list.Add(new Genre() { Name = @"House", Description = @"House", SpecNumber = 35 });
            list.Add(new Genre() { Name = @"Game", Description = @"Game", SpecNumber = 36 });
            list.Add(new Genre() { Name = @"Sound clip", Description = @"Sound clip", SpecNumber = 37 });
            list.Add(new Genre() { Name = @"Gospel", Description = @"Gospel", SpecNumber = 38 });
            list.Add(new Genre() { Name = @"Noise", Description = @"Noise", SpecNumber = 39 });
            list.Add(new Genre() { Name = @"Alternative Rock", Description = @"Alternative Rock", SpecNumber = 40 });
            list.Add(new Genre() { Name = @"Bass", Description = @"Bass", SpecNumber = 41 });
            list.Add(new Genre() { Name = @"Soul", Description = @"Soul", SpecNumber = 42 });
            list.Add(new Genre() { Name = @"Punk", Description = @"Punk", SpecNumber = 43 });
            list.Add(new Genre() { Name = @"Space", Description = @"Space", SpecNumber = 44 });
            list.Add(new Genre() { Name = @"Meditative", Description = @"Meditative", SpecNumber = 45 });
            list.Add(new Genre() { Name = @"Instrumental Pop", Description = @"Instrumental Pop", SpecNumber = 46 });
            list.Add(new Genre() { Name = @"Instrumental Rock", Description = @"Instrumental Rock", SpecNumber = 47 });
            list.Add(new Genre() { Name = @"Ethnic", Description = @"Ethnic", SpecNumber = 48 });
            list.Add(new Genre() { Name = @"Gothic", Description = @"Gothic", SpecNumber = 49 });
            list.Add(new Genre() { Name = @"Darkwave", Description = @"Darkwave", SpecNumber = 50 });
            list.Add(new Genre() { Name = @"Techno-Industrial", Description = @"Techno-Industrial", SpecNumber = 51 });
            list.Add(new Genre() { Name = @"Electronic", Description = @"Electronic", SpecNumber = 52 });
            list.Add(new Genre() { Name = @"Pop-Folk", Description = @"Pop-Folk", SpecNumber = 53 });
            list.Add(new Genre() { Name = @"Eurodance", Description = @"Eurodance", SpecNumber = 54 });
            list.Add(new Genre() { Name = @"Dream", Description = @"Dream", SpecNumber = 55 });
            list.Add(new Genre() { Name = @"Southern Rock", Description = @"Southern Rock", SpecNumber = 56 });
            list.Add(new Genre() { Name = @"Comedy", Description = @"Comedy", SpecNumber = 57 });
            list.Add(new Genre() { Name = @"Cult", Description = @"Cult", SpecNumber = 58 });
            list.Add(new Genre() { Name = @"Gangsta", Description = @"Gangsta", SpecNumber = 59 });
            list.Add(new Genre() { Name = @"Top 40", Description = @"Top 40", SpecNumber = 60 });
            list.Add(new Genre() { Name = @"Christian Rap", Description = @"Christian Rap", SpecNumber = 61 });
            list.Add(new Genre() { Name = @"Pop/Funk", Description = @"Pop/Funk", SpecNumber = 62 });
            list.Add(new Genre() { Name = @"Jungle music", Description = @"Jungle music", SpecNumber = 63 });
            list.Add(new Genre() { Name = @"Native US", Description = @"Native US", SpecNumber = 64 });
            list.Add(new Genre() { Name = @"Cabaret", Description = @"Cabaret", SpecNumber = 65 });
            list.Add(new Genre() { Name = @"New Wave", Description = @"New Wave", SpecNumber = 66 });
            list.Add(new Genre() { Name = @"Psychedelic", Description = @"Psychedelic", SpecNumber = 67 });
            list.Add(new Genre() { Name = @"Rave", Description = @"Rave", SpecNumber = 68 });
            list.Add(new Genre() { Name = @"Showtunes", Description = @"Showtunes", SpecNumber = 69 });
            list.Add(new Genre() { Name = @"Trailer", Description = @"Trailer", SpecNumber = 70 });
            list.Add(new Genre() { Name = @"Lo-Fi", Description = @"Lo-Fi", SpecNumber = 71 });
            list.Add(new Genre() { Name = @"Tribal", Description = @"Tribal", SpecNumber = 72 });
            list.Add(new Genre() { Name = @"Acid Punk", Description = @"Acid Punk", SpecNumber = 73 });
            list.Add(new Genre() { Name = @"Acid Jazz", Description = @"Acid Jazz", SpecNumber = 74 });
            list.Add(new Genre() { Name = @"Polka", Description = @"Polka", SpecNumber = 75 });
            list.Add(new Genre() { Name = @"Retro", Description = @"Retro", SpecNumber = 76 });
            list.Add(new Genre() { Name = @"Musical", Description = @"Musical", SpecNumber = 77 });
            list.Add(new Genre() { Name = @"Rock 'n' Roll", Description = @"Rock 'n' Roll", SpecNumber = 78 });
            list.Add(new Genre() { Name = @"Hard Rock", Description = @"Hard Rock", SpecNumber = 79 });

            list.Sort((x, y) => string.Compare(x.Name, y.Name));

            return list;
        }

        public static List<StreamSource> StreamSources()
        {
            var list = new List<StreamSource>();

            list.Add(new StreamSource()
            {
                Name = @"ClusterFox",
                Country = "USA",
                Description = @"2",
                Rate = @"320k",
                Metadata = false,
                SystemDefault = true,
                UserDefault = false,
                URL = @"https://deependswamp.ddns.net:8443/deepend"
            });

            list.Add(new StreamSource() { 
                Name = @"smadger", 
                Country = "UK", 
                Description = @"1",
                Rate = @"192k", 
                Metadata = false,
                SystemDefault = false,
                UserDefault = false,
                URL = @"https://deepend.ddns.net/stream"
            });

            list.Add(new StreamSource()
            {
                Name = @"smadger",
                Country = "UK",
                Description = @"2",
                Rate = @"192k",
                Metadata = true,
                SystemDefault = false,
                UserDefault = false,
                URL = @"http://deepend.ddns.net:8000"
            });

            list.Add(new StreamSource() { 
                Name = @"ClusterFox", 
                Country = "USA", 
                Description = @"1", 
                Rate=@"320k",
                Metadata = true,
                SystemDefault = false,
                UserDefault = false,
                URL = @"http://deependswamp.ddns.net:8000/deepend  "
            });

            return list;
        }
    }
}

