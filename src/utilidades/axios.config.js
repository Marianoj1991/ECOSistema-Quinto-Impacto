import axios from 'axios'
import { decodeJWT } from '@/utilidades/decodedToken'; 


const instance = axios.create({
  baseURL: 'http://localhost:8080', // Reemplaza con la URL base de tu API
  timeout: 5000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json'
    // Agrega otros headers necesarios aquí
  }
})

// Verifica si el token ha expirado
const isTokenExpired = (token) => {
  const decoded = decodeJWT(token);
  console.log(decoded)
  if (!decoded) return true; // Si no se pudo decodificar, asume que ha expirado
  return decoded.exp * 1000 < Date.now(); // Multiplica por 1000 para convertir a milisegundos
};


//  CONFIGURAR LOS INTERCEPTORES PARA TOKENS
instance.interceptors.request.use(
  (config) => {
    if (config.url !== '/login') {
      const token = localStorage.getItem('token');
      if (token) {
        if (isTokenExpired(token)) {
          localStorage.removeItem('token');
          window.location.href = '/login';
          return Promise.reject(new Error('Token expirado, redirigiendo al login'));
        }
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
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
