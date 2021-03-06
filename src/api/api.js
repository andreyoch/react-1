import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "651ca601-00e4-4e8f-833e-6e718562786c",
  },
});

export const usersAPI = {
  getUsers(pageSize, pageNumber) {
    return instance
      .get(`users?count=${pageSize}&page=${pageNumber}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    instance
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "651ca601-00e4-4e8f-833e-6e718562786c",
          },
        }
      )
      .then((response) => response.data);
  },
};
