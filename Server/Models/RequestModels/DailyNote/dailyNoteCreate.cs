using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class DailyNoteCreate
{
    [Required]
    public string Title { get; set; }

    [Required]
    public string Content { get; set; }
}