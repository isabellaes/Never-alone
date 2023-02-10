using Microsoft.AspNetCore.Mvc;
using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.InterfaceRepository;
using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Controller;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactRepository _repository;
    private readonly UserManager<IdentityUser> _userManager;

    public ContactController(IContactRepository repository, UserManager<IdentityUser> userManager)
    {
        _repository = repository;
        _userManager = userManager;
    }

    [HttpGet("GetContactById")]
    public async Task<ActionResult<Contact>> GetContactById(string id)
    {
        var result = await _repository.GetContactById(id);
        if (result != null)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }


    [HttpGet("GetContactAll")]
    public async Task<ActionResult<IEnumerable<Contact>>> GetAllContacts()
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
    public async Task<ActionResult<bool>> DeleteContact(string id)
    {
        var result = await _repository.DeleteContact(id);
        if (result)
        {
            return Ok(result);
        }
        else { return NotFound(); }
    }
}
