
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

    public async Task<Profile> CreateProfile(Profile profile)
    {
        Profile profile1 = new Profile()
        {
            Id = profile.Id,
            Name = profile.Name,
            image = profile.image,
            user = profile.user,
            UserId = profile.UserId
        };

        _context.Profile.Add(profile1);
        _context.SaveChanges();

        return profile1;
    }
    public async Task<bool> DeleteProfile(int id)
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

    public async Task<Profile> GetProfileById(int id)
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