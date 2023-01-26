using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IUserRepository
    {
        public Task<User> CreateUser(User user);
        public Task<bool> DeleteUser(string id);

        public Task<User> GetUserById(string id);
    }
}