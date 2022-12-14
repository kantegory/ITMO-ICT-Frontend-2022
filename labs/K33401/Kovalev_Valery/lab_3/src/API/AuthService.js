export const getToken = async ({ username, password }) => {
  const json = JSON.stringify({ username, password });
  return await API.public.post("auth/token/login/", json);
};
