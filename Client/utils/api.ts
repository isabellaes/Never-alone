import { Profile } from "./types";

const url = "http://10.0.2.2:7167";

export const getProfileRequest = async (id: number) => {
  const response = await fetch(`${url}/getProfile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  if (response.ok) {
    const data: Profile = await response.json();
    return data;
  }
  throw response;
};

export const createProfileRequest = async (id: number, name: string) => {
  const response = await fetch(`${url}/profile/createProfile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      name,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const updateProfileRequest = async (id: number, name: string) => {
  const response = await fetch(`${url}/profile/updateProfile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      name,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};
