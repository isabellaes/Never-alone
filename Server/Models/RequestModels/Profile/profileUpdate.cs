using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class ProfileUpdate
{
    [Required]
    public string Name { get; set; }

}