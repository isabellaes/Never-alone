using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactRepository _repository;

    public ContactController(IContactRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetContactById")]
    public async Task<ActionResult<Contact>> GetContactById(int id)
    {
        var result = await _repository.GetContactById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetContactAll")]
    public async Task<ActionResult<IEnumerable<DailyNote>>> GetAllContacts()
    {
        var result = await _repository.GetAllContacts();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateContact")]
    public async Task<ActionResult<Contact>> CreateProfile(Contact contact)
    {
        var result = await _repository.CreateContact(contact);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteContact")]
    public async Task<ActionResult<bool>> DeleteContact(int id)
    {
        var result = await _repository.DeleteContact(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}
