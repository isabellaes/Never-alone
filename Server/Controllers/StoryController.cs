using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class StoryController : ControllerBase
{
    private readonly IStoryRepository _repository;

    public StoryController(IStoryRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetById")]
    public async Task<ActionResult<Story>> GetStoryById(string id)
    {
        var result = await _repository.GetStoryById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Story>>> GetAllStorys()
    {
        var result = await _repository.GetAllStorys();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("Create")]
    public async Task<ActionResult<Story>> CreateStory(Story story)
    {
        var result = await _repository.CreateStory(story);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("Delete")]
    public async Task<ActionResult<bool>> DeleteStory(string id)
    {
        var result = await _repository.DeleteStory(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}





