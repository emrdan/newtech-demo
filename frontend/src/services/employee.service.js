import ApiService from './api.service.js';

export default {
  get: (params = {}) => {
    return ApiService.get("/employees", params);
  }
}