
using NeverAlone.InterfaceRepository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using NeverAlone.Models;

namespace NeverAlone.Repository;

public class TipsRepository : ITipsRepository
{
    private readonly DataContext _context;
    public TipsRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<Tips> CreateTips(Tips tips)
    {
        Tips tips1 = new Tips()
        {
            Id = tips.Id,
            Title = tips.Title

        };

        _context.Tips.Add(tips1);
        _context.SaveChanges();

        return tips1;
    }
    public async Task<bool> DeleteTips(int id)
    {
        var result = await _context.Tips.FirstOrDefaultAsync(m => m.Id == id);
        if (result != null)
        {
            _context.Tips.Remove(result);
            _context.SaveChanges();
            return true;
        }
        else
        {
            return false;
        }
    }

    public async Task<IEnumerable<Tips>> GetAllTips()
    {
        return await _context.Tips.ToListAsync();
    }

    public async Task<Tips> GetTipsById(int id)
    {
        var result = await _context.Tips.FirstOrDefaultAsync(m => m.Id == id);
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