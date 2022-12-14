export const API = {
  public: axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  private: axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }),
};
