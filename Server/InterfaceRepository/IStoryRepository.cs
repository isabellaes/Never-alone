using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IStoryRepository
    {
        public Task<Story> CreateStory(Story story);
        public Task<bool> DeleteStory(string id);

        public Task<IEnumerable<Story>> GetAllStorys();

        public Task<Story> GetStoryById(string id);
    }
}