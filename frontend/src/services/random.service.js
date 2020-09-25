import ApiService from './api.service.js';

export default {
  get: (params = { id: 1 }) => {
    return ApiService.get("/images", params);
  }
}