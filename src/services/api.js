import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-promptmode.cloudcom.com.br',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    const { status } = response;

    if (status === 401) {
      if (response.data.error) {
        if (response.data.error === 'Token invalid') {
          localStorage.clear();
          window.location.reload();
        }
      }
    }
    return Promise.reject(error);
  }
);

export function clearAll() {
  window.location.reload();
  localStorage.clear();
}

export default api;
