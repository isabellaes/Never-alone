using AutoMapper;
using NeverAlone.Models;
using NeverAlone.Dto;

namespace NeverAlone.Automapper
{
    public class AutomapperProfile : AutoMapper.Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Tips, TipsDto>().ReverseMap();
            CreateMap<DailyNote, DailyNoteDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
        }
    }
}