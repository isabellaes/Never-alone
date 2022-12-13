using System.ComponentModel.DataAnnotations;
using System;

namespace NeverAlone.Dto
{
    public class CreateDailyNoteDto
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 50, ErrorMessage = "Title name is too long")]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime datetime { get; set; }

        [Required]
        public int UserId { get; set; }
    }

    public class DailyNoteDto : CreateDailyNoteDto
    {
        public int Id { get; set; }

        public UserDto user { get; set; }

    }
}