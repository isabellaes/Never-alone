using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class MoodCreate
{
    [Required]
    public string Icon { get; set; }
}