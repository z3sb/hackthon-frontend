import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosClient = axios.create({
  baseURL: BASEURL,
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosClient };
