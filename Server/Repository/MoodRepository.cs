using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;
using Microsoft.AspNetCore.Identity;

namespace NeverAlone.Repository;

public class MoodRepository : IMoodRepository
{
    private readonly DataContext _context;
    public MoodRepository(DataContext context)
    {
        _context = context;

    }
    public async Task<Mood> CreateMood(string id, string icon)
    {
        Mood mood = new Mood { id = Guid.NewGuid().ToString(), userId = id, icon = icon, date = DateTime.Now };

        _context.Mood.Add(mood);
        await _context.SaveChangesAsync();

        return mood;
    }

    public async Task<IEnumerable<MoodDTO>> GetAllMoods(string id)
    {
        var moods = await _context.Mood.Where(m => m.userId == id).ToListAsync();
        var returnItems = new List<MoodDTO>(moods.Select(m => new MoodDTO { icon = m.icon, date = m.date.ToString("yyyy-MM-ddTHH:mm:ss") }).ToList());
        return returnItems;
    }
}