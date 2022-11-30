
using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class StoryRepository : IStoryRepository
{
    private readonly DataContext _context;
    public StoryRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<Story> CreateStory(Story story)
    {
        Story story1 = new Story()
        {
            Id = story.Id,
            Text = story.Text,
            Title = story.Title

        };

        _context.Story.Add(story1);
        _context.SaveChanges();

        return story1;
    }
    public async Task<bool> DeleteStory(int id)
    {
        var result = await _context.Story.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            _context.Story.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else
        {
            return false;
        }
    }

    public async Task<IEnumerable<Story>> GetAllStorys()
    {
        return await _context.Story.ToListAsync();
    }

    public async Task<Story> GetStoryById(int id)
    {
        var result = await _context.Story.FirstOrDefaultAsync(m => m.Id == id);
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