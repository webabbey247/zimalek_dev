import axios from "axios";

const instance = axios.create({
    // baseURL: "http://api.numadenergy.com/api/v1",
});

instance.interceptors.request.use(
  async (config) => {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["withCredentials"] = true;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;