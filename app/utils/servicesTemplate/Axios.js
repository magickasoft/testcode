import axios from 'axios';

export default class Axios {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  create(url) {
    return new Axios(`${this._baseUrl}${url}`);
  }

  // api metod
  post(url, data, config) {
    return axios.post(`${this._baseUrl}${url}`, data, config);
  }

  patch(url, data) {
    return axios.patch(`${this._baseUrl}${url}`, data);
  }

  put(url, data) {
    return axios.put(`${this._baseUrl}${url}`, data);
  }

  get(url) {
    return axios.get(`${this._baseUrl}${url}`);
  }

  delete(url, params) {
    return axios.delete(`${this._baseUrl}${url}`, params);
  }
}
