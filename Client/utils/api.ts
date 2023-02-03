const url = "http://10.0.2.2:5015/api";

export const getProfileRequest = async () => {
  const response = await fetch(`${url}/profile/Get`, {
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

export const createProfileRequest = async (name: string) => {
  const response = await fetch(`${url}/profile/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  const response = await fetch(`${url}/authentication/register`, {
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
