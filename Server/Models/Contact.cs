using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Models
{
    public class Contact
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string UserId { get; set; }
        public IdentityUser user { get; set; }
    }
}