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

    public async Task<Profile> CreateProfile(IdentityUser user, string name)
    {
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

    public async Task<Profile> EditProfile(IdentityUser user, string name)
    {

        var profile = await _context.Profile.FirstOrDefaultAsync(p => p.user == user);

        if (profile != null)
        {
            profile.Name = name;

            _context.SaveChangesAsync();

            return profile;
        }
        else { return null; }
    }

    public async Task<bool> DeleteProfile(IdentityUser user)
    {
        var result = await _context.Profile.FirstOrDefaultAsync(m => m.user == user);
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

    public async Task<Profile> GetProfileForUser(IdentityUser user)
    {
        var result = await _context.Profile.FirstOrDefaultAsync(m => m.user == user);
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