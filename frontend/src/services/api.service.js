import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://0.0.0.0:5001`,
  withCredentials: false, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  get: (resource, params = {}) => {
    return apiClient
      .get(resource, { params })
      .then(r => r.data);
  },
  post: (resource, data) => {
    return apiClient.post(resource, data)
  },
  put: (resource, data) => {
    return apiClient.put(resource, data)
  },
  delete: (resource) => {
    return apiClient.delete(resource)
  }
}