using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using NeverAlone.Models.RequestModels;
using System.Text;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class AuthenticationController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly IConfiguration _configuration;

    public AuthenticationController(
        UserManager<IdentityUser> userManager,
        IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }


    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] AuthLogin authlogin)
    {
        var user = await _userManager.FindByNameAsync(authlogin.Username);
        if (user != null && await _userManager.CheckPasswordAsync(user, authlogin.Password))
        {
            var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };


            var token = GetToken(authClaims);

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo,
                user = new { username = user.UserName, email = user.Email }
            });

        }

        return Unauthorized();
    }


    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> Register([FromBody] AuthRegister authregister)
    {
        var userExists = _userManager.Users.FirstOrDefault(u => u.UserName == authregister.Username);
        if (userExists != null)
            return StatusCode(StatusCodes.Status500InternalServerError);

        IdentityUser user = new()
        {
            Email = authregister.Email,
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = authregister.Username
        };

        var result = await _userManager.CreateAsync(user, authregister.Password);
        if (!result.Succeeded)
            return StatusCode(StatusCodes.Status500InternalServerError);

        return Ok();
    }

    public Task<IActionResult> Me()
    {
        return Task.FromResult<IActionResult>(Ok(
            new
            {
                User.Identity.Name,
                User.Identity.IsAuthenticated,
                User.Identity.AuthenticationType,
            }));
    }

    private JwtSecurityToken GetToken(List<Claim> authClaims)
    {
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:Issuer"],
            // audience: _configuration["JWT:Audience"],
            expires: DateTime.Now.AddDays(1),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
            );

        return token;
    }
}





