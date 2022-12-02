using NeverAlone.Models;

namespace NeverAlone.InterfaceRepository
{

    public interface IContactRepository
    {
        public Task<Contact> CreateContact(Contact contact);
        public Task<bool> DeleteContact(int id);

        public Task<IEnumerable<Contact>> GetAllContacts();

        public Task<Contact> GetContactById(int id);
    }
}