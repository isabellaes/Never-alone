using System;
using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Models
{
    public class DailyNote
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime datetime { get; set; }
        public string UserId { get; set; }
        public IdentityUser User { get; set; }

    }
}