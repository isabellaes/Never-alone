using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;
using Microsoft.AspNetCore.Identity;
using NeverAlone.Models.RequestModels;

namespace NeverAlone.Controller;

[ApiController]
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
    public async Task<ActionResult<Contact>> GetContactById(string id)
    {
        var result = await _repository.GetDailyNoteById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<DailyNote>>> GetAllContacts()
    {
        var result = await _repository.GetAllDailyNotes();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("Create")]
    public async Task<ActionResult<Contact>> CreateProfile([FromBody] DailyNoteCreate dailynote)
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
    public async Task<ActionResult<bool>> DeleteContact(string id)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var result = await _repository.DeleteDailyNote(id);

        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}
