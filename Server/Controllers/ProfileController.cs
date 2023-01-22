using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("profile/[controller]")]
public class ProfileController : ControllerBase
{
    private readonly IProfileRepository _repository;

    public ProfileController(IProfileRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("/getProfile")]
    public async Task<ActionResult<Profile>> GetProfileById(int id)
    {
        var result = await _repository.GetProfileById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Profile>>> GetAllProfiles()
    {
        var result = await _repository.GetAllProfiles();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateProfile")]
    public async Task<ActionResult<Profile>> CreateProfile(Profile profile)
    {
        var result = await _repository.CreateProfile(profile);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteProfile")]
    public async Task<ActionResult<bool>> DeleteProfile(int id)
    {
        var result = await _repository.DeleteProfile(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }




}