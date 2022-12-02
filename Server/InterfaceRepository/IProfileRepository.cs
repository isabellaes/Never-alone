using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IProfileRepository
    {
        public Task<Profile> CreateProfile(Profile profile);
        public Task<bool> DeleteProfile(int id);

        public Task<IEnumerable<Profile>> GetAllProfiles();

        public Task<Profile> GetProfileById(int id);
    }
}