using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class AuthRegister
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
}