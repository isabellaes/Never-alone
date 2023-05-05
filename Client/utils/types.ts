interface Profile {
  id: string;
  name: string;
  image: string;
  userId: number;
  user: User;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface LogInRespons {
  user: User;
  token: string;
  expiration: string;
}

interface RegisterRespons {
  accepted: boolean;
}

interface Error {
  error: string;
}

type DailyNote = {
  id: string;
  title: string;
  content: string;
  userId: string;
  user: User;
  date: Date;
};

interface Mood {
  icon: string;
  date: string;
}

export type {
  Profile,
  User,
  LogInRespons,
  RegisterRespons,
  Error,
  DailyNote,
  Mood,
};
