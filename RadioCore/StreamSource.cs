using System;
using System.Collections.Generic;
using System.Text;

namespace RadioCore
{
    public class StreamSource
    {
        public string? Name { get; set; }

        public string? Description { get; set; }

        public string? Country { get; set; }

        public string? Rate { get; set; }

        public string? URL { get; set; }

        public bool? Metadata { get; set; }

        public bool? SystemDefault { get; set; }

        public bool? UserDefault { get; set; }
    }
}
