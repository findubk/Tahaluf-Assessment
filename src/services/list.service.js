import axios from 'axios';

import { BASE_URL } from 'src/constants/config';

const request = axios.create({ baseURL: BASE_URL });

const api = {
  // get list api
  getList: async () => request.get(),
};

export default api;