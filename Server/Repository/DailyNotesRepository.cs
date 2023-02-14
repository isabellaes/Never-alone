using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;
using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Repository;

public class DailyNoteRepository : IDailyNoteRepository
{
    private readonly DataContext _context;
    public DailyNoteRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<DailyNote> CreateDailyNote(string userId, string title, string content)
    {
        DailyNote newDailyNote = new DailyNote()
        {
            Id = Guid.NewGuid().ToString(),
            Title = title,
            Content = content,
            datetime = new DateTime(),
            UserId = userId
        };

        _context.DailyNote.Add(newDailyNote);
        _context.SaveChanges();
        return newDailyNote;

    }
    public async Task<bool> DeleteDailyNote(string id)
    {
        var result = await _context.DailyNote.FirstOrDefaultAsync(c => c.Id == id);
        if (result != null)
        {
            _context.DailyNote.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else { return false; }
    }

    public async Task<IEnumerable<DailyNote>> GetAllDailyNotes(string userId)
    {
        return await _context.DailyNote.Where(x => x.UserId == userId).ToListAsync();

    }

    public async Task<DailyNote> GetDailyNoteById(string id)
    {
        var result = await _context.DailyNote.FirstOrDefaultAsync(c => c.Id == id);

        if (result != null)
        {
            return result;
        }
        else { return null; }
    }

}