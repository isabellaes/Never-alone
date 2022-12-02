using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.InterfaceRepository;

namespace NeverAlone.Controller;

[ApiController]
[Route("contact")]
public class ContactController : ControllerBase
{
    private readonly IContactRepository _repository;

    public ContactController(IContactRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("GetById")]
    public async Task<ActionResult<Contact>> GetContactById(int id)
    {
        var result = await _repository.GetContactById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Contact>>> GetAllContacts()
    {
        var result = await _repository.GetAllContacts();
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpPost("CreateProfile")]
    public async Task<ActionResult<Contact>> CreateProfile(Contact contact)
    {
        var result = await _repository.CreateContact(contact);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }

    [HttpDelete("DeleteProfile")]
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