 import {User} from "./types"
const url = "http://10.0.2.2:5015/api";

export const getProfileRequest = async (id: string) => {
  const response = await fetch(`${url}/profile/GetProfile?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("test");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const createProfileRequest = async (id: string, name: string) => {
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

export const updateProfileRequest = async (id: string, name: string) => {
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

export const getDailyNoteRequest = async () => {
  const response = await fetch(`${url}/dailyNote/GetAllDailyNote`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
 
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const createDailyNoteRequest = async (id: string, title: string, content: string, UserId: string, user: User) => {
  const response = await fetch(`${url}/dailyNote/createDailyNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      content,
     // dateTime,
      UserId,
      user
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const updateDailyNoteRequest = async (id: string, title: string) => {
  const response = await fetch(`${url}/dailyNote/updateDailyNote`, {
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

