import Config from "@config/Config";
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const Api: AxiosInstance = axios.create({
  baseURL: Config.API_BASE_URL,
});

Api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers["X-Access-Token"] = Config.X_ACCESS_TOKEN;
  return config;
});
const LiveUrl: AxiosInstance = axios.create({
  baseURL: Config.LIVE_API_BASE_URL,
});

LiveUrl.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // config.headers["X-Access-Token"] = Config.X_ACCESS_TOKEN;
  return config;
});
Api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const { status } = (error.response as AxiosResponse) ?? {};
    if (status === 401) {
    } else if (status === 403) {
    } else if (status === 404) {
    } else if (status === 500) {
    }
    return Promise.reject(error);
  }
);
export { Api,LiveUrl };
