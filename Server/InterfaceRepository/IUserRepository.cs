using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository {

    public interface IUserRepository
    {
        public Task<User> CreateUser(User user);
        public Task<bool> DeleteUser(int id);

        public Task<User> GetUserById(int id);
    }
}