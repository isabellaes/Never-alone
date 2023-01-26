using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IProfileRepository
    {
        public Task<Profile> CreateProfile(string userId, string name);
        public Task<bool> DeleteProfile(string id);

        public Task<IEnumerable<Profile>> GetAllProfiles();

        public Task<Profile> GetProfileById(string id);
        public Task<Profile> EditProfile(string userId, string name);
    }
}