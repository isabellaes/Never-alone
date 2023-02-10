using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;
using Microsoft.AspNetCore.Identity;
using NeverAlone.Models.RequestModels;
using Microsoft.AspNetCore.Authorization;

namespace NeverAlone.Controller;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class ProfileController : ControllerBase
{
    private readonly IProfileRepository _repository;
    private readonly UserManager<IdentityUser> _userManager;

    public ProfileController(IProfileRepository repository, UserManager<IdentityUser> userManager)
    {
        _repository = repository;
        _userManager = userManager;
    }

    [HttpGet("Get")]
    public async Task<ActionResult<Profile>> GetProfileForUser()
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.GetProfileForUser(user.Id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("Create")]
    public async Task<ActionResult<Profile>> CreateProfile([FromBody] ProfileCreate profile)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.CreateProfile(user.Id, profile.Name);

        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpPost("Update")]
    public async Task<ActionResult<Profile>> UpdateProfile([FromBody] ProfileUpdate profile)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.UpdateProfile(user.Id, profile.Name);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }




}