import { useEffect, useState } from "react";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  getEstadisticasProductosServicios,
  getEstadisticasPublicaciones,
} from "../../servicios/getAxios";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  const [productsServicesStatistics, setProductsServicesStatistics] = useState(
    []
  );
  const [publicationsStatistics, setPublicationsStatistics] = useState([]);

  const getStatistics = async () => {
    const productsServicesStatistics =
      await getEstadisticasProductosServicios();
    const publicationsStatistics = await getEstadisticasPublicaciones();

    setProductsServicesStatistics(productsServicesStatistics.data);
    setPublicationsStatistics(publicationsStatistics.data);
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <>
      <BarraNavegacion />
      <Box className={styles.container}>
        <Typography color="negro.main" component="h1" className={styles.title}>
          Dashboard Administrador
        </Typography>
        <Typography
          color="negro.main"
          component="h2"
          className={styles.subtitle}
        >
          Estadísticas mensuales
        </Typography>
        <Box
          sx={{ backgroundColor: "violeta.main" }}
          className={styles.containerNuevosPerfiles}
        >
          <Typography
            color="blanco.main"
            component="p"
            className={styles.textNuevosPerfiles}
          >
            Nuevos Perfiles creados
          </Typography>
          <Typography
            color="blanco.main"
            component="p"
            className={styles.textNuevosPerfiles}
          >
            {productsServicesStatistics.nuevosPerfilesCreados}
          </Typography>
        </Box>

        <Grid
          container
          columnSpacing={1}
          className={styles.containerOtrosEstados}
        >
          <Grid xs={4}>
            <Box
              sx={{ borderColor: "verdeExito.main" }}
              className={styles.containerEstado}
            >
              <Typography
                color="negro.main"
                component="p"
                className={styles.textEstado}
              >
                Aprobados
              </Typography>

              <Divider
                sx={{ borderColor: "verdeExito.main" }}
                className={styles.dividerEstado}
              />
              <Typography
                color="negro.main"
                component="p"
                className={styles.numberEstado}
              >
                {productsServicesStatistics.aprobados}
              </Typography>
            </Box>
          </Grid>

          <Grid xs={4}>
            <Box
              sx={{ borderColor: "naranja.main" }}
              className={styles.containerEstado}
            >
              <Typography
                color="negro.main"
                component="p"
                className={styles.textEstado}
              >
                Revisión
              </Typography>

              <Divider
                sx={{ borderColor: "naranja.main" }}
                className={styles.dividerEstado}
              />
              <Typography
                color="negro.main"
                component="p"
                className={styles.numberEstado}
              >
                {productsServicesStatistics.enRevision}
              </Typography>
            </Box>
          </Grid>

          <Grid xs={4}>
            <Box
              sx={{ borderColor: "rojo.main" }}
              className={styles.containerEstado}
            >
              <Typography
                color="negro.main"
                component="p"
                className={styles.textEstado}
              >
                Denegados
              </Typography>

              <Divider
                sx={{ borderColor: "rojo.main" }}
                className={styles.dividerEstado}
              />
              <Typography
                color="negro.main"
                component="p"
                className={styles.numberEstado}
              >
                {productsServicesStatistics.denegados}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{ backgroundColor: "grisClaro.main" }}
          className={styles.containerMainProveedoresCategorias}
        >
          <Typography
            color="violeta.main"
            component="p"
            className={styles.textProveedoresCategorias}
          >
            Proveedores por categoría
          </Typography>
          <Divider
            sx={{ borderColor: "violeta.main" }}
            className={styles.dividerProveedoresCategorias}
          />
          <Box className={styles.containerProveedoresCategorias}>
            {/* Bienestar */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Bienestar
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaBienestar}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Capacitaciones */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Capacitaciones
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaCapacitaciones}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Construcción */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Construcción
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaConstruccion}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Cultivos */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Cultivos
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaCultivos}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Gastronomía */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Gastronomía
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaGastronomia}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Indumentaria */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Indumentaria
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaIndumentaria}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Merchandising */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Merchandising
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaMerchandising}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Muebles/Deco */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Muebles/Deco
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaMueblesDeco}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Reciclaje */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Reciclaje
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaReciclaje}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Tecnología */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Tecnología
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaTecnologia}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>

            {/* Transporte */}
            <Box>
              <Box className={styles.containerProveedorNumero}>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textProveedor}
                >
                  Transporte
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textNumero}
                >
                  {productsServicesStatistics.categoriaTransporte}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "negro.main" }} />
            </Box>
          </Box>
        </Box>

        <Typography
          color="negro.main"
          component="h3"
          className={styles.textVisualizaciones}
        >
          Visualizaciones por Publicación
        </Typography>

        {publicationsStatistics.map((publication) => (
          <Box
            sx={{ borderColor: "violeta.main" }}
            className={styles.containerPublicacion}
            key={publication.id}
          >
            <Box>
              <Typography
                color="negro.main"
                component="p"
                className={styles.textNamePublicacion}
              >
                {publication.titulo}
              </Typography>
              <Typography
                color="negro.main"
                component="p"
                className={styles.textDatePublicacion}
              >
                {publication.fecha}
              </Typography>
            </Box>
            <Box className={styles.containerViewsPublicacion}>
              <VisibilityOutlinedIcon color="violeta" />
              <Typography
                color="violeta.main"
                component="p"
                className={styles.numberViewsPublicacion}
              >
                {publication.vistas}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default AdminDashboard;
