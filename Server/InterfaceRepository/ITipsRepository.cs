using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface ITipsRepository
    {
        public Task<Tips> CreateTips(Tips tips);
        public Task<IEnumerable<Tips>> GetAllTips();
        public Task<Tips> GetTipsById(string id);
        public Task<bool> DeleteTips(string id);
    }
}