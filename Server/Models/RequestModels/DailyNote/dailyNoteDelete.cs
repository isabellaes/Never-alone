using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class DailyNoteDelete
{
    [Required]
    public string Id { get; set; }

}