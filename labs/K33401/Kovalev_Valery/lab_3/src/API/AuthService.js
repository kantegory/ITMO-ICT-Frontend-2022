import { API } from "./index";

export const getToken = async ({ username, password }) => {
  const json = JSON.stringify({ username, password });
  const response = await API.post("auth/token/login/", json);
  return response.data;
};

export const getUser = async ({ token }) => {
  const response = await API.get("auth/users/me/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return await response.data;
};
