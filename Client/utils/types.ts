interface Profile {
  id: number;
  name: string;
  image: string;
  userId: number;
  user: User;
}

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type { Profile };
