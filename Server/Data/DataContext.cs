using Microsoft.EntityFrameworkCore;
using NeverAlone.Models;

namespace NeverAlone.Context
{

    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<DailyNote> DailyNote { get; set; }
        public DbSet<Meditation> Meditation { get; set; }
        public DbSet<Profile> Profile { get; set; }
        public DbSet<Story> Story { get; set; }
        public DbSet<Tips> Tips { get; set; }


    }
}