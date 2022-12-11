using System.ComponentModel.DataAnnotations;
using System;

namespace NeverAlone.Dto
{
    public class CreateTipsDto
    {
        [Required]
        [StringLength(maximumLength: 50, ErrorMessage = "Tiltle name is too long")]
        public string? Title { get; set; }

        [Required]
        public string? Details { get; set; }
    }

    public class TipsDto : CreateTipsDto
    {
        public int Id { get; set; }
    }
}