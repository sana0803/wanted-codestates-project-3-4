import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/info/contents',
  headers: {
    'TEST-AUTH': 'wantedpreonboarding',
  },
});

export const apis = () => instance.get();
