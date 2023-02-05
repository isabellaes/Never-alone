interface Profile {
  id: string;
  name: string;
  image: string;
  userId: number;
  user: User;
}

interface User {
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

export type { Profile, User, LogInRespons, RegisterRespons, Error };
