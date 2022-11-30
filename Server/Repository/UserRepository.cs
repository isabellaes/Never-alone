
using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class UserRepository : IUserRepository
{
    private readonly DataContext _context;
    public UserRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<User> CreateUser(User user)
    {
        User user1 = new User()
        {
            Id = user.Id,
            UserName = user.UserName,
            Mail = user.Mail,
            Password = user.Password

        };

        _context.User.Add(user1);
        _context.SaveChanges();

        return user1;
    }
    public async Task<bool> DeleteUser(int id)
    {
        var result = await _context.User.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            _context.User.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else
        {
            return false;
        }
    }

    public async Task<User> GetUserById(int id)
    {
        var result = await _context.User.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            return result;
        }
        else
        {
            return null;
        }
    }
}