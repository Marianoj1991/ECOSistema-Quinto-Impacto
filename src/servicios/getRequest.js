// src/utilidades/api.js
import axios from '@/utilidades/axios.config.js';



export const login = async (idToken) => {
  try {
      console.log(idToken)
    const res = await axios.get('/login', {
      headers: {
        Authorization: `Bearer ${idToken}`
      },
      timeout: 0
    });
    console.log(res)

    const authorization = res.headers['authorization'];
    const token = authorization.split(' ')[1];

    localStorage.setItem('token', token);


    return { token};
  } catch (error) {
    console.error("Error al iniciar sesión con Google: ", error);

    throw error;
  }
};
