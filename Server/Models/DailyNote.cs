using System;

namespace NeverAlone.Models
{
    public class DailyNote
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime datetime { get; set; }
        public int UserId { get; set; }
        public User user { get; set; }

    }
}