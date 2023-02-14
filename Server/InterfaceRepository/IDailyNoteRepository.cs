using Microsoft.AspNetCore.Identity;
using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IDailyNoteRepository
    {
        public Task<DailyNote> CreateDailyNote(string userId, string title, string content);
        public Task<bool> DeleteDailyNote(string id);

        public Task<IEnumerable<DailyNote>> GetAllDailyNotes(string userId);

        public Task<DailyNote> GetDailyNoteById(string userId);
    }
}