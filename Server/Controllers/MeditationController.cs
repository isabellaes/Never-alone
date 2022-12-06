using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("meitation")]
public class MeditationController : ControllerBase
{
    private readonly IMeditationRepository _repository;

    public MeditationController(IMeditationRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetMeditationById")]
    public async Task<ActionResult<Meditation>> GetMeditationById(int id)
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
    public async Task<ActionResult<Meditation>> CreateMedtiation(Meditation meditation)
    {
        var result = await _repository.CreateMeditation(meditation);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteMeditation")]
    public async Task<ActionResult<bool>> DeleteMeditation(int id)
    {
        var result = await _repository.DeleteMeditation(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}





