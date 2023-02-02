using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class TipsController : ControllerBase
{
    private readonly ITipsRepository _repository;

    public TipsController(ITipsRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetById")]
    public async Task<ActionResult<Profile>> GetTipsById(string id)
    {
        var result = await _repository.GetTipsById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAllTips")]
    public async Task<ActionResult<IEnumerable<Tips>>> GetAllTips()
    {
        var result = await _repository.GetAllTips();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateTips")]
    public async Task<ActionResult<Tips>> CreateTis(Tips tips)
    {
        var result = await _repository.CreateTips(tips);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteTips")]
    public async Task<ActionResult<bool>> DeleteTips(string id)
    {
        var result = await _repository.DeleteTips(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}





