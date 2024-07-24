import { Busquedas } from "../paginas/busquedas/Busquedas";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../ui/ErrorPage";
import { Inicio } from "../paginas/inicio/Inicio";
import { Publicaciones } from "../paginas/publicaciones/Publicaciones";
import CategoriasPagina from "../paginas/categoriasPagina/CategoriasPagina";
import InicioSesion from "../Paginas/inicioSesion/InicioSesion";
import Perfil from "../Paginas/perfil/Perfil";
import Registro from "../Paginas/registro/Registro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    error: <ErrorPage />,
  },
  {
    path: "/login",
    element: <InicioSesion />,
    error: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <Registro />,
    error: <ErrorPage />,
  },
  {
    path: "/visitantes/publicaciones",
    element: <Publicaciones />,
    error: <ErrorPage />,
  },
  {
    path: "/busquedas",
    element: <Busquedas />,
    error: <ErrorPage />,
  },
  {
    path: "/categorias",
    element: <CategoriasPagina />,
    error: <ErrorPage />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
    error: <ErrorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}