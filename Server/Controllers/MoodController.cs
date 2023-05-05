using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;
using NeverAlone.Models.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Controller;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class MoodController : ControllerBase
{
    private readonly IMoodRepository _repository;
    private readonly UserManager<IdentityUser> _userManager;

    public MoodController(IMoodRepository repository, UserManager<IdentityUser> userManager)
    {
        _repository = repository;
        _userManager = userManager;
    }


    [HttpPost("Create")]
    public async Task<ActionResult<Mood>> CreateMood([FromBody] MoodCreate mood)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.CreateMood(user.Id, mood.Icon);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Mood>>> GetAllMoods()
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.GetAllMoods(user.Id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}