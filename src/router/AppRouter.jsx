import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../ui/ErrorPage";
import { Inicio } from "../paginas/inicio/Inicio";
import { Publicaciones } from "../paginas/publicaciones/Publicaciones";


const router = createBrowserRouter([
  {
    path: '/login',
    element: <h1>LOGIN PAGE</h1>,
    error: <ErrorPage />
  },
  {
    path: '/registro',
    element: <h1>REGISTRO PAGE</h1>,
    error: <ErrorPage />
  },
  {
    path: '/',
    element: <Inicio />,
    error: <ErrorPage />
  },
  {
    path: '/visitantes/publicaciones',
    element: <Publicaciones />,
    error: <ErrorPage />
  }
])


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}