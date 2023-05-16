using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{
    public interface IMoodRepository
    {
        public Task<MoodDTO> CreateMood(string id, string icon);
        public Task<IEnumerable<MoodDTO>> GetAllMoods(string id);
    }
}