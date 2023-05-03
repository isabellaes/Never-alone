using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NeverAlone.Models;
using NeverAlone.Context;

namespace NeverAlone.Data;

public class SeedingDataForTest
{
    public static async Task SeedAsync(DataContext context, UserManager<IdentityUser> userManager)
    {
        await context.Database.EnsureCreatedAsync();

        await SeedUsersAsync(context, userManager);
        await SeedProfilesAsync(context);
        await SeedMeditationsAsync(context);
        await SeedDailyNotesAsync(context);
        await SeedMoodsAsync(context);
    }

    private static async Task SeedUsersAsync(DataContext context, UserManager<IdentityUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new IdentityUser
            {
                Id = "1",
                UserName = "user",
                Email = "user@email.com",
                EmailConfirmed = true
            };
            await userManager.CreateAsync(user, "password");

            var user2 = new IdentityUser
            {
                Id = "2",
                UserName = "user2",
                Email = "user2@email.com",
                EmailConfirmed = true
            };
            await userManager.CreateAsync(user2, "password");

            var user3 = new IdentityUser
            {
                Id = "3",
                UserName = "user3",
                Email = "user3@mail.com",
                EmailConfirmed = true
            };
            await userManager.CreateAsync(user3, "password");
        }

    }

    private static async Task SeedProfilesAsync(DataContext context)
    {
        if (!context.Profile.Any())
        {
            Profile[] profiles = {
        new Profile{Id = "1", Name = "user1", UserId = "1"},
        new Profile{Id = "2", Name = "user2", UserId = "2"},
        new Profile{Id = "3", Name = "user3", UserId = "3"}};

            await context.Profile.AddRangeAsync(profiles);
            await context.SaveChangesAsync();
        }


    }

    private static async Task SeedMeditationsAsync(DataContext context)
    {
        if (!context.Meditation.Any())
        {
            Meditation[] meditations = {
            new Meditation{Id ="1", Title="Meditation", Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            new Meditation{Id ="2", Title="Meditation", Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            new Meditation{Id ="3", Title="Meditation", Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            new Meditation{Id ="4", Title="Meditation", Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            new Meditation{Id ="5", Title="Meditation", Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        };


            await context.Meditation.AddRangeAsync(meditations);
            await context.SaveChangesAsync();
        }



    }
    private static async Task SeedDailyNotesAsync(DataContext context)
    {
        if (!context.DailyNote.Any())
        {
            DailyNote[] dailynotes = {
        new DailyNote{Id ="1", Title = "user1", Content= "Some random text about something...", UserId = "1"},
        new DailyNote{Id ="2", Title = "user1", Content= "Some random text about something...", UserId = "2"},
        new DailyNote{Id ="3", Title = "user1", Content= "Some random text about something...",  UserId = "3"},
        new DailyNote{Id ="4", Title = "user1", Content= "Some random text about something...", UserId = "1"},
        new DailyNote{Id ="5", Title = "user1", Content= "Some random text about something...", UserId = "2"},
        new DailyNote{Id ="6", Title = "user1", Content= "Some random text about something...",  UserId = "3"}
        };

            await context.DailyNote.AddRangeAsync(dailynotes);
            await context.SaveChangesAsync();
        }
    }

    private static async Task SeedMoodsAsync(DataContext context)
    {
        if (!context.Mood.Any())
        {
            Mood[] moods = {
                new Mood{id = "1", userId = "1", icon = "😢", date= new DateTime(2023-04-20)},
                new Mood{id = "1", userId = "1", icon = "👎", date= new DateTime(2023-04-22)},
                new Mood{id = "1", userId = "1", icon = "😢", date= new DateTime(2023-04-23)},
                new Mood{id = "1", userId = "1", icon = "👌", date= new DateTime(2023-04-29)},
                new Mood{id = "1", userId = "1", icon = "👌", date= new DateTime(2023-04-29)},
                new Mood{id = "1", userId = "1", icon = "👌", date= new DateTime(2023-05-01)},
                new Mood{id = "1", userId = "1", icon = "👍", date= new DateTime(2023-05-02)},
                new Mood{id = "1", userId = "1", icon = "😊", date= new DateTime(2023-04-29)},
                new Mood{id = "1", userId = "1", icon = "😊", date= new DateTime(2023-04-29)},
                new Mood{id = "1", userId = "1", icon = "😊", date= new DateTime()}
            };

            await context.Mood.AddRangeAsync(moods);
            await context.SaveChangesAsync();
        }
    }
}

