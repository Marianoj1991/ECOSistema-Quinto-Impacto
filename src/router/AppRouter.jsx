import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../ui/ErrorPage";
import { Publicaciones } from "../paginas/publicaciones/Publicaciones";
import PaginaRegistro from "../paginas/Registro/PaginaRegistro";
import PageInicioSesion from "../paginas/inicioSesion/inicioSesion";
import { Inicio } from "../paginas/inicio/Inicio";
import { Busquedas } from "../paginas/busquedas/Busquedas";

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
  },
  {
    path: '/busquedas/:nombre',
    element: <Busquedas />,
    error: <ErrorPage />
  }
])


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}