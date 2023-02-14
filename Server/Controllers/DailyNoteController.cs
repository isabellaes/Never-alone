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
public class DailyNoteController : ControllerBase
{
    private readonly IDailyNoteRepository _repository;
    private readonly UserManager<IdentityUser> _userManager;

    public DailyNoteController(IDailyNoteRepository repository, UserManager<IdentityUser> userManager)
    {
        _repository = repository;
        _userManager = userManager;
    }

    [HttpGet("GetById")]
    public async Task<ActionResult<DailyNote>> GetDailyNotetById([FromBody] DailyNoteGetById dailynote)
    {
        var result = await _repository.GetDailyNoteById(dailynote.Id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<DailyNote>>> GetAllDailyNotes()
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.GetAllDailyNotes(user.Id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("Create")]
    public async Task<ActionResult<DailyNote>> CreateDailyNote([FromBody] DailyNoteCreate dailynote)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.CreateDailyNote(user.Id, dailynote.Title, dailynote.Content);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("Delete")]
    public async Task<ActionResult<bool>> DeleteDailyNote([FromBody] DailyNoteDelete dailynote)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.DeleteDailyNote(dailynote.Id);

        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}
