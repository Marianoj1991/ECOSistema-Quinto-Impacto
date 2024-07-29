import {jwtDecode} from 'jwt-decode';

export const decodeJWT = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error("Error decoding JWT: ", error);
    return null;
  }
};