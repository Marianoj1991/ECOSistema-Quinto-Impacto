import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/', // Reemplaza con la URL base de tu API
  timeout: 1000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json'
    // Agrega otros headers necesarios aquí
  }
})

//  CONFIGURAR LOS INTERCEPTORES PARA TOKENS
// instance.interceptors.request.use(
//   (config) => {
//     // Realiza algo antes de enviar la solicitud
//     // Por ejemplo, agregar un token de autenticación
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     // Maneja el error de solicitud
//     return Promise.reject(error)
//   }
// )

// instance.interceptors.response.use(
//   (response) => {
//     // Realiza algo con la respuesta de datos
//     return response
//   },
//   (error) => {
//     // Maneja el error de respuesta
//     if (error.response && error.response.status === 401) {
//       // Redirigir al usuario a la página de inicio de sesión, por ejemplo 
//     }
//     return Promise.reject(error)
//   }
// )

export default instance
