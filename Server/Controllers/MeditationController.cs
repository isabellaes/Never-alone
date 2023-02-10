using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class MeditationController : ControllerBase
{
    private readonly IMeditationRepository _repository;

    public MeditationController(IMeditationRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetMeditationById")]
    public async Task<ActionResult<Meditation>> GetMeditationById(string id)
    {
        var result = await _repository.GetMeditationById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAllMeditations")]
    public async Task<ActionResult<IEnumerable<Meditation>>> GetAllMeditations()
    {
        var result = await _repository.GetAllMeditations();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateMeditation")]
    public async Task<ActionResult<Meditation>> CreateMedtiation(string title, string details)
    {
        var result = await _repository.CreateMeditation(title, details);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteMeditation")]
    public async Task<ActionResult<bool>> DeleteMeditation(string id)
    {
        var result = await _repository.DeleteMeditation(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}





