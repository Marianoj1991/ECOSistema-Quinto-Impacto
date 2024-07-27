import { useState } from "react";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./CargaProductoServicio.module.css";

const categorias = [
  {
    value: "bienestar",
    label: "Bienestar",
  },
  {
    value: "capacitaciones",
    label: "Capacitaciones",
  },
  {
    value: "construccion",
    label: "Construcción",
  },
  {
    value: "cultivos",
    label: "Cultivos",
  },
  {
    value: "gastronomia",
    label: "Gastronomía",
  },
  {
    value: "indumentaria",
    label: "Indumentaria",
  },
  {
    value: "merchandising",
    label: "Merchandising",
  },
  {
    value: "muebles/deco",
    label: "Muebles/Deco",
  },
  {
    value: "reciclaje",
    label: "Reciclaje",
  },
  {
    value: "tecnologia",
    label: "Tecnología",
  },
  {
    value: "transporte",
    label: "Transporte",
  },
];

const paises = [
  {
    value: "argentina",
    label: "Argentina",
  },
  {
    value: "chile",
    label: "Chile",
  },
  {
    value: "colombia",
    label: "Colombia",
  },
  {
    value: "uruguay",
    label: "Uruguay",
  },
];

const provinciaEstado = [
  {
    value: "buenos aires",
    label: "Buenos Aires",
  },
  {
    value: "cordoba",
    label: "Córdoba",
  },
  {
    value: "mendoza",
    label: "Mendoza",
  },
  {
    value: "san luis",
    label: "San Luis",
  },
];

function CargaProductoServicio() {
  const [conteoCaracteres1, setConteoCaracteres1] = useState(0);
  const [conteoCaracteres2, setConteoCaracteres2] = useState(0);
  const [imagenes, setImagenes] = useState([]);

  const agregarImagenes = (e) => {
    const iterableImagenes = e.target.files;

    if (!iterableImagenes.length) return;

    const arrayImagenes = Array.from(iterableImagenes);

    if (arrayImagenes.length > 3 - imagenes.length)
      arrayImagenes.length = 3 - imagenes.length;

    const urlImagenes = [];

    for (const imagen of arrayImagenes) {
      const urlImagen = URL.createObjectURL(imagen);
      urlImagenes.push(urlImagen);
    }

    setImagenes([...imagenes, ...urlImagenes]);
  };

  const borrarImagen = (index) => {
    const copiaImagenes = [...imagenes];

    const imagenBorrada = copiaImagenes.splice(index, 1);

    URL.revokeObjectURL(imagenBorrada);

    setImagenes(copiaImagenes);
  };

  return (
    <>
      <BarraNavegacion />
      <Box className={styles.contenedor}>
        <Typography color="negro.main" component="h1" className={styles.titulo}>
          Carga de Producto/Servicio
        </Typography>
        <Typography
          color="negro.main"
          component="h2"
          className={styles.subtitulo}
        >
          Completá el formulario para subir tu Producto/Servicio
        </Typography>
        <Box component="form" autoComplete="off" noValidate>
          <TextField
            id="nombre"
            label="Nombre de la Organización*"
            helperText="Se visualizará en el título de la publicación"
            margin="dense"
            fullWidth
          />
          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="descripcion-corta">
              Breve descripción del Producto/Servicio*
            </InputLabel>
            <OutlinedInput
              id="descripcion-corta"
              label="Breve descripción del Producto/Servicio*"
              onInput={(e) => setConteoCaracteres1(e.target.value.length)}
            />
            <Box className={styles.textoAyuda}>
              <FormHelperText>
                Se visualizará en el subtítulo de la publicación
              </FormHelperText>
              <FormHelperText>{`${conteoCaracteres1}/50`}</FormHelperText>
            </Box>
          </FormControl>
          <TextField
            id="categoria"
            select
            defaultValue=""
            label="Categoría*"
            helperText="Seleccioná la categoría de tu Producto/Servicio"
            margin="dense"
            fullWidth
          >
            {categorias.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="correo-electronico"
            label="Correo electrónico*"
            helperText="El mismo con el que te registraste o uno diferente"
            margin="dense"
            fullWidth
          />
          <TextField
            id="telefono-whatsapp"
            label="Teléfono o Whatsapp*"
            helperText="Con el siguiente formato +54 9 261 002 002"
            margin="dense"
            fullWidth
          />
          <TextField
            id="instagram"
            label="Instagram"
            helperText="Podés pegar el link de tu perfil"
            margin="dense"
            fullWidth
          />
          <TextField
            id="facebook"
            label="Facebook"
            helperText="Podés pegar el link de tu perfil"
            margin="dense"
            fullWidth
          />
          <TextField
            id="ciudad"
            label="Ciudad*"
            helperText="Sin abreviaturas, nombre completo"
            margin="dense"
            fullWidth
          />
          <TextField
            id="pais"
            select
            defaultValue=""
            label="País*"
            helperText="Seleccioná un país de la lista"
            margin="dense"
            fullWidth
          >
            {paises.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="provincia-estado"
            select
            defaultValue=""
            label="Provincia/Estado*"
            helperText="Seleccioná una provincia/estado de la lista"
            margin="dense"
            fullWidth
          >
            {provinciaEstado.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="descripcion-larga">
              Descripción del Producto/Servicio
            </InputLabel>
            <OutlinedInput
              id="descripcion-larga"
              label="Descripción del Producto/Servicio"
              rows={6}
              onInput={(e) => setConteoCaracteres2(e.target.value.length)}
              multiline
            />
            <Box className={styles.textoAyuda}>
              <FormHelperText>Máximo 300 caracteres</FormHelperText>
              <FormHelperText>{`${conteoCaracteres2}/300`}</FormHelperText>
            </Box>
          </FormControl>

          <Box className={styles.contenedorImagenes}>
            {imagenes.map((imagen, index) => (
              <Box className={styles.contenedorImagen} key={index}>
                <IconButton
                  color="blanco"
                  onClick={() => borrarImagen(index)}
                  className={styles.botonBorrar}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
                <img src={imagen} className={styles.imagenes} />
              </Box>
            ))}
          </Box>

          {imagenes.length < 3 && (
            <Box className={styles.seccionBotonSubida}>
              <Box className={styles.contenedorBotonSubida}>
                <Button
                  component="label"
                  variant="contained"
                  color="violeta"
                  startIcon={<FileUploadOutlinedIcon />}
                  sx={{ color: "blanco.main" }}
                  className={styles.botonSubida}
                  disableElevation
                >
                  Subir imagen
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={agregarImagenes}
                    multiple
                  />
                </Button>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textoCondicionesSubida}
                >
                  *Requerida al menos una imagen
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textoCondicionesSubida}
                >
                  Hasta 3 imágenes
                </Typography>
                <Typography
                  color="negro.main"
                  component="p"
                  className={styles.textoCondicionesSubida}
                >
                  Máximo 3MB cada una
                </Typography>
              </Box>
            </Box>
          )}

          <Button
            variant="contained"
            color="violeta"
            onClick={() => console.log("CARGAR")}
            sx={{ color: "blanco.main" }}
            className={styles.botonCargar}
            disableElevation
            fullWidth
          >
            Cargar Producto/Servicio
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CargaProductoServicio;
