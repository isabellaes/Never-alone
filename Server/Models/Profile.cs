using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Models
{

    public class Profile
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string image { get; set; }
        public string UserId { get; set; }

        public IdentityUser user { get; set; }

    }
}
