using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class ContactRepository : IContactRepository
{
    private readonly DataContext _context;
    public ContactRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<Contact> CreateContact(Contact contact)
    {
        Contact newContact = new Contact()
        {
            Id = Guid.NewGuid().ToString(),
            Name = contact.Name,
            PhoneNumber = contact.PhoneNumber,
            user = contact.user,
            UserId = contact.UserId
        };

        _context.Contact.Add(newContact);
        await _context.SaveChangesAsync();
        return newContact;

    }
    public async Task<bool> DeleteContact(string id)
    {
        var result = await _context.Contact.FirstOrDefaultAsync(c => c.Id == id);
        if (result != null)
        {
            _context.Contact.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else { return false; }
    }

    public async Task<IEnumerable<Contact>> GetAllContacts()
    {
        return await _context.Contact.ToListAsync();

    }

    public async Task<Contact> GetContactById(string id)
    {
        var result = await _context.Contact.FirstOrDefaultAsync(c => c.Id == id);

        if (result != null)
        {
            return result;
        }
        else { return null; }
    }

}