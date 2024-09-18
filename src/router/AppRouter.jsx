import { Busquedas } from "../paginas/busquedas/Busquedas";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../ui/ErrorPage";
import { Inicio } from "../paginas/inicio/Inicio";
import { Publicaciones } from "../paginas/publicaciones/Publicaciones";
import AdminDashboard from "../Paginas/adminDashboard/AdminDashboard";
import CargarProductoServicio from "../Paginas/cargarProductoServicio/CargarProductoServicio";
import CategoriasPagina from "../paginas/categoriasPagina/CategoriasPagina";
import CrearPublicacion from "@/Paginas/crearPublicacion/CrearPublicacion";
import EditarProductoServicio from "../Paginas/editarProductoServicio/EditarProductoServicio";
import EditarPublicaciones from "@/Paginas/editarPublicaciones/EditarPublicaciones";
import InicioSesion from "../Paginas/inicioSesion/InicioSesion";
import Perfil from "../Paginas/perfil/Perfil";
import ProveedoresAdmin from "../paginas/proveedoresAdmin/ProveedoresAdmin";
import PublicacionesAdmin from "../Paginas/publicacionesAdmin/PublicacionesAdmin";
import Registro from "../Paginas/registro/Registro";

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
  // {
  //   path: '/visitantes/publicaciones',
  //   element: <Publicaciones />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: "/proveedores",
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

  //RUTAS SOLO ADMINISTRADOR
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
  {
    path: "/crear-publicacion",
    element: <CrearPublicacion />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/editar-publicacion/:id",
    element: <EditarPublicaciones />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    error: <ErrorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
