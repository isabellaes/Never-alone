using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;
using Microsoft.AspNetCore.Identity;

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
        Profile profile = new Profile()
        {
            Id = Guid.NewGuid().ToString(),
            Name = name,
            image = "",
            UserId = userId
        };

        _context.Profile.Add(profile);
        _context.SaveChanges();

        return profile;

    }

    public async Task<Profile> UpdateProfile(string userId, string name)
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

    public async Task<Profile> GetProfileForUser(string userId)
    {
        var result = await _context.Profile.FirstOrDefaultAsync(m => m.UserId == userId);
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