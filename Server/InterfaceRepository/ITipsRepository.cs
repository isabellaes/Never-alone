using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository {

    public interface ITipsRepository
    {
        public Task<Tips> CreateTips(Tips tips);
        public Task<IEnumerable<Tips>> GetAllTips();
        public Task<Tips> GetTipsById(int id);
        public Task<bool> DeleteTips(int id);
    }
}