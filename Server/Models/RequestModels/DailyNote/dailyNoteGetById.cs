using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class DailyNoteGetById
{
    [Required]
    public string Id { get; set; }

}