
using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class MeditationRepository : IMeditationRepository
{
    private readonly DataContext _context;
    public MeditationRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<Meditation> CreateMeditation(string title, string details)
    {
        Meditation meditation = new Meditation()
        {
            Id = Guid.NewGuid().ToString(),
            Title = title,
            Details = details
        };

        _context.Meditation.Add(meditation);
        await _context.SaveChangesAsync();

        return meditation;
    }
    public async Task<bool> DeleteMeditation(string id)
    {
        var result = await _context.Meditation.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            _context.Meditation.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else
        {
            return false;
        }
    }

    public async Task<IEnumerable<Meditation>> GetAllMeditations()
    {
        return await _context.Meditation.ToListAsync();
    }

    public async Task<Meditation> GetMeditationById(string id)
    {
        var result = await _context.Meditation.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            return result;
        }
        else
        {
            return null;
        }
    }
}