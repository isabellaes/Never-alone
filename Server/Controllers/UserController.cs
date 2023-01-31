using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserRepository _repository;

    public UserController(IUserRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetUserById")]
    public async Task<ActionResult<User>> GetUserById(string id)
    {
        var result = await _repository.GetUserById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateUser")]
    public async Task<ActionResult<User>> CreateProfile(User user)
    {
        var result = await _repository.CreateUser(user);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteUser")]
    public async Task<ActionResult<bool>> DeleteUser(string id)
    {
        var result = await _repository.DeleteUser(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}





