using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class DailyNoteRepository : IDailyNoteRepository
{
    private readonly DataContext _context;
    public DailyNoteRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<DailyNote> CreateDailyNote(DailyNote dailyNote)
    {
        DailyNote newDailyNote = new DailyNote()
        {
            Id = dailyNote.Id,
            Title = dailyNote.Title,
            Content = dailyNote.Content,
            datetime = dailyNote.datetime,
            user = dailyNote.user,
            UserId = dailyNote.UserId
        };

        _context.DailyNote.Add(newDailyNote);
        _context.SaveChanges();
        return newDailyNote;

    }
    public async Task<bool> DeleteDailyNote(int id)
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

    public async Task<IEnumerable<DailyNote>> GetAllDailyNotes()
    {
        return await _context.DailyNote.ToListAsync();

    }

    public async Task<DailyNote> GetDailyNoteById(int id)
    {
        var result = await _context.DailyNote.FirstOrDefaultAsync(c => c.Id == id);

        if (result != null)
        {
            return result;
        }
        else { return null; }
    }

}