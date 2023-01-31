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

export const getDailyNoteRequest = async (id: string) => {
  const response = await fetch(`${url}/dailyNote/GetDailyNote?id=${id}`, {
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

export const createDailyNoteRequest = async (id: string, name: string) => {
  const response = await fetch(`${url}/dailyNote/createDailyNote`, {
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

