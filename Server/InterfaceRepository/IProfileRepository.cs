using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IProfileRepository
    {
        public Task<Profile> CreateProfile(string userId, string name);
        public Task<Profile> UpdateProfile(string userId, string name);
        public Task<Profile> GetProfileForUser(string userId);
    }
}