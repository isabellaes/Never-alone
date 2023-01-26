using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class ProfileRepository : IProfileRepository
{
    private readonly DataContext _context;
    public ProfileRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<Profile> CreateProfile(string userId, string name)
    {
        var user = await _context.User.FindAsync(userId);
        if (user != null)
        {
            Profile profile = new Profile()
            {
                Id = Guid.NewGuid().ToString(),
                Name = name,
                image = "",
                user = user,
                UserId = user.Id
            };

            _context.Profile.Add(profile);
            _context.SaveChanges();

            return profile;
        }
        else { return null; }
    }

    public async Task<Profile> EditProfile(string userId, string name)
    {

        var profile = await _context.Profile.FirstOrDefaultAsync(p => p.UserId == userId);

        if (profile != null)
        {
            profile.Name = name;

            _context.SaveChangesAsync();

            return profile;
        }
        else { return null; }
    }

    public async Task<bool> DeleteProfile(string id)
    {
        var result = await _context.Profile.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            _context.Profile.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else
        {
            return false;
        }
    }

    public async Task<IEnumerable<Profile>> GetAllProfiles()
    {
        return await _context.Profile.ToListAsync();
    }

    public async Task<Profile> GetProfileById(string id)
    {
        var result = await _context.Profile.FirstOrDefaultAsync(m => m.Id == id);
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