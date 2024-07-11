import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../ui/ErrorPage";
import { Inicio } from "../paginas/inicio/Inicio";
import { Publicaciones } from "../paginas/publicaciones/Publicaciones";
import PaginaRegistro from "../paginas/Registro/PaginaRegistro";
import PageInicioSesion from "../paginas/inicioSesion/inicioSesion";


const router = createBrowserRouter([
  {
    path: '/login',
    element: <PageInicioSesion />,
    error: <ErrorPage />
  },
  {
    path: '/registro',
    element: <PaginaRegistro />,
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