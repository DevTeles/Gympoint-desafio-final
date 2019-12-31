import Config from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: Config.RN_BASE_URL,
});

export default api;
