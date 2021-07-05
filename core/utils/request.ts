import axios, { AxiosRequestConfig } from "axios"

const request = {
  get: (url: string, config: AxiosRequestConfig = {}) => {
    return axios.get(url, config)
  },

  post: (url: string, config: AxiosRequestConfig = {}) => {
    return axios.post(url, config)
  },

  put: (url: string, config: AxiosRequestConfig = {}) => {
    return axios.put(url, config)
  },

  delete: (url: string, config: AxiosRequestConfig = {}) => {
    return axios.delete(url, config)
  },
}

export default request