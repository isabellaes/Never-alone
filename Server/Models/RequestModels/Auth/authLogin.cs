using System.ComponentModel.DataAnnotations;

namespace NeverAlone.Models.RequestModels;

public class AuthLogin
{
    [Required]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }
}