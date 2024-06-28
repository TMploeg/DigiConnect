import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = "http://localhost:8080/api/v1/";

export default function useApi() {
  function get<TResponse>(url: string, config?: AxiosRequestConfig<any>) {
    return axios.get<TResponse>(API_URL + url, config);
  }

  function post(
    url: string,
    body: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<any, any>> {
    return axios.post(API_URL + url, body, config);
  }

  return {
    get,
    post,
  };
}
