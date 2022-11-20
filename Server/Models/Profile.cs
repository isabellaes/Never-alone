namespace NeverAlone.Models
{

    public class Profile
    {
        public int Id { get; set; }

        public string Name { get; set; }


        public string image { get; set; }

        public int UserId { get; set; }

        public User user { get; set; }


    }
}
