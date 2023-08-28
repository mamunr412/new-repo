import { getToken } from "../Hooks/useToken";

import axios from "axios";
import { baseurl } from "./Constant";

export const http = axios.create({
  baseURL: baseurl,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token ? token : ""}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403) ||
      (error.response &&
        error.response.data.message === "Unauthorized request!")
    ) {
      console.log("hi bab member go to log out !");
    }
    return Promise.reject(error);
  }
);
