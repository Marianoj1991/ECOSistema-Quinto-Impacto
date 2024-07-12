import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./EmpresasImpacto.module.css";

function EmpresasImpacto() {
  return (
    <Box
      borderTop={2}
      borderBottom={2}
      borderColor="violeta.main"
      className={styles.contenedor}
    >
      <Typography color="violeta.main" component="h2" className={styles.titulo}>
        ¿Qué son las empresas de impacto?
      </Typography>
      <Typography color="negro.main" component="p" className={styles.cuerpo}>
        Son organizaciones con un compromiso fundamental con la generación de un
        impacto positivo en la sociedad y el medio ambiente como parte integral
        de su modelo de negocio.
      </Typography>
    </Box>
  );
}

export default EmpresasImpacto;
