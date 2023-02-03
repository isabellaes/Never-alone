using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class ProfileCreate
{
    [Required]
    public string Name { get; set; }

}