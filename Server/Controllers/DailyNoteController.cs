using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class DailyNoteController : ControllerBase
{
    private readonly IDailyNoteRepository _repository;

    public DailyNoteController(IDailyNoteRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetDailyNoteById")]
    public async Task<ActionResult<DailyNote>> GetDailyNoteById(int id)
    {
        var result = await _repository.GetDailyNoteById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAllDailyNotes")]
    public async Task<ActionResult<IEnumerable<DailyNote>>> GetAllDailyNotes()
    {
        var result = await _repository.GetAllDailyNotes();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateDailyNote")]
    public async Task<ActionResult<DailyNote>> CreateDailyNote(DailyNote dailyNote)
    {
        var result = await _repository.CreateDailyNote(dailyNote);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteDailyNote")]
    public async Task<ActionResult<bool>> DeleteDailyNote(int id)
    {
        var result = await _repository.DeleteDailyNote(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}



