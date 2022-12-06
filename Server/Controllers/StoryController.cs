using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("story")]
public class StoryController : ControllerBase
{
    private readonly IStoryRepository _repository;

    public StoryController(IStoryRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetStoryById")]
    public async Task<ActionResult<Profile>> GetStoryById(int id)
    {
        var result = await _repository.GetStoryById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAllStorys")]
    public async Task<ActionResult<IEnumerable<Profile>>> GetAllStorys()
    {
        var result = await _repository.GetAllStorys();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateStory")]
    public async Task<ActionResult<Story>> CreateStory(Story story)
    {
        var result = await _repository.CreateStory(story);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteStory")]
    public async Task<ActionResult<bool>> DeleteStory(int id)
    {
        var result = await _repository.DeleteStory(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}





