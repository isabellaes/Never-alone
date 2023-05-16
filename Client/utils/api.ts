import { get } from "./securestore";

const url = "http://10.0.2.2:5015/api";

export const getProfileRequest = async () => {
  const response = await fetch(`${url}/profile/Get`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const createProfileRequest = async (name: string) => {
  const response = await fetch(`${url}/profile/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const updateProfileRequest = async (name: string) => {
  const response = await fetch(`${url}/profile/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const loginRequest = async (username: string, password: string) => {
  const response = await fetch(`${url}/authentication/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const registerRequest = async (
  email: string,
  username: string,
  password: string
) => {
  const response = await fetch(`${url}/Authentication/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw response;
};


export const getDailyNoteRequest = async () => {
  const response = await fetch(`${url}/dailyNote/GetAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const createDailyNoteRequest = async (
  title: string,
  content: string
) => {
  const response = await fetch(`${url}/dailyNote/Create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
    body: JSON.stringify({
      title,
      content,
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
      Authorization: `Bearer ${await get("user.token")}`,
    },
    body: JSON.stringify({
      id,
      title,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};

export const deleteDailyNoteRequest = async (id: string) => {
  const response = await fetch(`${url}/dailyNote/Delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
    body: JSON.stringify({
      id,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw response;
};

export const createMoodRequest = async (icon: string) => {
  const response = await fetch(`${url}/mood/Create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
    body: JSON.stringify({
      icon,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw response;
};

export const getAllMoodsRequest = async () => {
  const response = await fetch(`${url}/mood/GetAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await get("user.token")}`,
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw response;
};
