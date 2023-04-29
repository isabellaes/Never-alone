using NeverAlone.Models;
using NeverAlone.Repository;
using NeverAlone.Context;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace test;

public class DailyNoteRepositoryTest
{
    public DataContext TestDbContext()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
        .UseInMemoryDatabase(databaseName: "NeverAlone")
        .Options;
        var _context = new DataContext(options);

        return _context;
    }

    [Fact]
    public void Test_DailyNoteRepository_Create_Suceed()
    {
        var context = TestDbContext();
        var repository = new DailyNoteRepository(context);

        var result = repository.CreateDailyNote("1", "title", "content");

        Assert.NotNull(result);
    }

    [Fact]
    public async void Test_DailyNoteRepository_GetById_Returns_Correct_Object()
    {
        var context = TestDbContext();
        context.DailyNote.Add(new DailyNote { Id = "23" });
        context.SaveChanges();
        var repository = new DailyNoteRepository(context);
        var expected = "23";

        var result = await repository.GetDailyNoteById("23");

        Assert.Equal(result.Id, expected);
    }

}