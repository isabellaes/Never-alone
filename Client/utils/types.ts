interface Profile {
  id: number;
  name: string;
  image: string;
  userId: number;
  user: User;
}

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

type DailyNote = {
  id: string,
  title: string;
  content: string;
  userId: string;
  user: User
}

export type { Profile, DailyNote, User };
