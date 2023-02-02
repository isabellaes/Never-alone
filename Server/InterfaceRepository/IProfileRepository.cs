using Microsoft.AspNetCore.Identity;
using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IProfileRepository
    {
        public Task<Profile> CreateProfile(IdentityUser user, string name);
        public Task<bool> DeleteProfile(IdentityUser user);
        public Task<Profile> EditProfile(IdentityUser user, string name);

        public Task<Profile> GetProfileForUser(IdentityUser user);
    }
}