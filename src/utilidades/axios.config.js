import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Reemplaza con la URL base de tu API
  timeout: 5000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json'
    // Agrega otros headers necesarios aquí
  }
})

//  CONFIGURAR LOS INTERCEPTORES PARA TOKENS
instance.interceptors.request.use(
  (config) => {
    if (config.url !== '/login') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    // console.log('Request Headers:', config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//  Interceptor de respuesta
instance.interceptors.response.use(
  (response) => {
    if (response.headers['authorization']) {
      const token = response.headers['authorization'].split(' ')[1];
      localStorage.setItem('token', token);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          console.error('Acceso denegado');
          break;
        case 500:
          console.error('Error del servidor');
          break;
        default:
          console.error('Error desconocido');
      }
    } else if (error.request) {
      console.error('Error de red');
    } else {
      console.error('Error', error.message);
    }
    return Promise.reject(error);
  }
);

 export default instance;
