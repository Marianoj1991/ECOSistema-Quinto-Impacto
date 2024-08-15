import { Busquedas } from "../paginas/busquedas/Busquedas";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../ui/ErrorPage";
import { Inicio } from "../paginas/inicio/Inicio";
import { Publicaciones } from "../paginas/publicaciones/Publicaciones";
import CargarProductoServicio from "../Paginas/cargarProductoServicio/CargarProductoServicio";
import CategoriasPagina from "../paginas/categoriasPagina/CategoriasPagina";
import EditarProductoServicio from "../Paginas/editarProductoServicio/EditarProductoServicio";
import InicioSesion from "../Paginas/inicioSesion/InicioSesion";
import Perfil from "../Paginas/perfil/Perfil";
import Registro from "../Paginas/registro/Registro";
import ProveedoresAdmin from "../paginas/proveedoresAdmin/ProveedoresAdmin";
import PublicacionesAdmin from "../Paginas/publicacionesAdmin/PublicacionesAdmin";
import CrearPublicacion from "@/Paginas/crearPublicacion/CrearPublicacion"
import EditarPublicaciones from "@/Paginas/editarPublicaciones/EditarPublicaciones"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <InicioSesion />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <Registro />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/publicaciones",
    element: <Publicaciones />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/busquedas",
    element: <Busquedas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categorias",
    element: <CategoriasPagina />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cargar",
    element: <CargarProductoServicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/editar/:id",
    element: <EditarProductoServicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/proveedores",
    element: <ProveedoresAdmin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/publicaciones",
    element: <PublicacionesAdmin />,
    errorElement: <ErrorPage />,
  },
  {path: "/crear-publicacion",
  element: <CrearPublicacion />,
  errorElement: <ErrorPage />,
},
{path: "/editar-publicacion/:id",
  element: <EditarPublicaciones />,
  errorElement: <ErrorPage />,
},
  {
    path: "/dashboard",
    element: <h1>ADMIN DASHBOARD</h1>,
    errorElement: <ErrorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
