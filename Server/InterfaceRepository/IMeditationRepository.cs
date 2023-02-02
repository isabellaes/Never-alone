using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IMeditationRepository
    {
        public Task<Meditation> CreateMeditation(string title, string details);
        public Task<bool> DeleteMeditation(string id);

        public Task<IEnumerable<Meditation>> GetAllMeditations();

        public Task<Meditation> GetMeditationById(string id);
    }
}