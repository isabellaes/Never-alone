using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository {

    public interface IDailyNoteRepository
    {
        public Task<DailyNote> CreateDailyNote(DailyNote dailyNote);
        public Task<bool> DeleteDailyNote(int id);

        public Task<IEnumerable<DailyNote>> GetAllDailyNotes();

        public Task<DailyNote> GetDailyNoteById(int id);
    }
}