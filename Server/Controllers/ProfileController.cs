using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;
using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Controller;

[ApiController]
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

    [HttpGet("GetProfile")]
    public async Task<ActionResult<Profile>> GetProfileForUser()
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.GetProfileForUser(user);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateProfile")]
    public async Task<ActionResult<Profile>> CreateProfile(string name)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.CreateProfile(user, name);

        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteProfile")]
    public async Task<ActionResult<bool>> DeleteProfile()
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.DeleteProfile(user);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }




}