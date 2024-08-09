import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Alerta from "../../componentes/alerta/Alerta";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  getCategorias,
  getPaises,
  getProvincias,
} from "../../servicios/getAxios";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { postProductoServicio } from "../../servicios/postAxios";
import productServiceSchema from "../../validations/productService";
import supportedImageFormats from "../../conf/supportedImageFormats";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./CargarProductoServicio.module.css";

function CargarProductoServicio() {
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [charactersCount1, setCharactersCount1] = useState(0);
  const [charactersCount2, setCharactersCount2] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [errorImages, setErrorImages] = useState("");

  const navigate = useNavigate();

  const getCategoriesCountries = async () => {
    const categories = await getCategorias();
    setCategories(categories.data);

    const countries = await getPaises();
    setCountries(countries.data);
  };

  useEffect(() => {
    getCategoriesCountries();
  }, []);

  const getStates = async (country) => {
    const states = await getProvincias(country);
    setStates(states.data);
  };

  useEffect(() => {
    if (!selectedCountry) return;

    getStates(selectedCountry);
  }, [selectedCountry]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(productServiceSchema),
  });

  const handleAccept = () => {
    setOpenSuccessAlert(false);

    navigate("/perfil");
  };

  const handleCancel = () => {
    setOpenErrorAlert(false);
  };

  const handleRetry = () => {
    setOpenErrorAlert(false);

    handleSubmit(submit)();
  };

  const addImages = (e) => {
    const iterableImages = e.target.files;

    if (!iterableImages.length) return;

    const arrayImages = Array.from(iterableImages);

    if (arrayImages.length > 3 - images.length)
      arrayImages.length = 3 - images.length;

    for (const image of arrayImages) {
      if (image.size > 3 * 1024 * 1024) {
        setErrorImages("Cada imagen no puede superar los 3MB");
        return;
      }

      if (!supportedImageFormats.includes(image.type)) {
        setErrorImages("Formato de imagen no soportado");
        return;
      }
    }

    const newImages = [];
    const newImagesUrl = [];

    for (const image of arrayImages) {
      newImages.push(image);

      const imageUrl = URL.createObjectURL(image);
      newImagesUrl.push(imageUrl);
    }

    setImages([...images, ...newImages]);
    setImagesUrl([...imagesUrl, ...newImagesUrl]);
    setErrorImages("");
  };

  const deleteImage = (index) => {
    const imagesCopy = [...images];
    const imagesUrlCopy = [...imagesUrl];

    imagesCopy.splice(index, 1);
    const deletedImageUrl = imagesUrlCopy.splice(index, 1);

    URL.revokeObjectURL(deletedImageUrl);

    setImages(imagesCopy);
    setImagesUrl(imagesUrlCopy);
  };

  const submit = async (data) => {
    // if (!images.length) {
    //   setErrorImages("Subí al menos una imagen");
    //   return;
    // }

    const formData = new FormData();

    formData.append("nombre", data.nombre || "string");
    formData.append("descripcionCorta", data.descripcionCorta || "string");
    formData.append("descripcionLarga", data.descripcionLarga || "string");
    formData.append("telefono", data.telefono || "string");
    formData.append("email", data.email || "string");
    formData.append("facebook", data.facebook || "string");
    formData.append("instagram", data.instagram || "string");
    formData.append("pais", data.pais || "Colombia");
    formData.append("provincia", data.provincia || "Antioquia");
    formData.append("ciudad", data.ciudad || "string");
    formData.append("categoria", data.categoria || "Bienestar");

    for (const i in images) {
      formData.append(`imagen${Number(i) + 1}`, images[i]);
    }

    const response = await postProductoServicio(formData);

    if (response.status === 201) {
      setOpenSuccessAlert(true);
    } else {
      setOpenErrorAlert(true);
    }
  };

  return (
    <>
      <Alerta
        type="success"
        mainMessage="Producto/Servicio cargado con éxito"
        openAlert={openSuccessAlert}
        handleAccept={handleAccept}
      />
      <Alerta
        type="error"
        mainMessage="Lo sentimos, el Producto/Servicio no pudo ser cargado"
        minorMessage="Por favor, volvé a intentarlo."
        openAlert={openErrorAlert}
        handleCancel={handleCancel}
        handleRetry={handleRetry}
      />
      <BarraNavegacion />
      <Box className={styles.container}>
        <Typography color="negro.main" component="h1" className={styles.title}>
          Carga de Producto/Servicio
        </Typography>
        <Typography
          color="negro.main"
          component="h2"
          className={styles.subtitle}
        >
          Completá el formulario para subir tu Producto/Servicio
        </Typography>

        <Box component="form" autoComplete="off" noValidate>
          {/* Nombre */}
          <TextField
            {...register("nombre")}
            id="nombre"
            label="Nombre de la Organización*"
            error={!errors?.nombre ? false : true}
            margin="dense"
            fullWidth
          />
          <Typography
            color={!errors?.nombre ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.nombre
              ? "Se visualizará en el título de la publicación"
              : errors.nombre.message}
          </Typography>

          {/* Descripción Corta */}
          <TextField
            {...register("descripcionCorta")}
            id="descripcionCorta"
            label="Breve descripción del Producto/Servicio*"
            error={!errors?.descripcionCorta ? false : true}
            margin="dense"
            onInput={(e) => setCharactersCount1(e.target.value.length)}
            fullWidth
          />
          <Box className={styles.containerHelperTextAndErrors}>
            <Typography
              color={!errors?.descripcionCorta ? "negro.main" : "rojo.main"}
              component="p"
              className={styles.helperTextAndErrors}
            >
              {!errors?.descripcionCorta
                ? "Se visualizará en el subtítulo de la publicación"
                : errors.descripcionCorta.message}
            </Typography>
            <Typography
              color={!errors?.descripcionCorta ? "negro.main" : "rojo.main"}
              component="p"
              className={styles.helperTextAndErrors}
            >
              {`${charactersCount1}/50`}
            </Typography>
          </Box>

          {/* Categoría */}
          <TextField
            {...register("categoria")}
            id="categoria"
            select
            defaultValue=""
            label="Categoría*"
            error={!errors?.categoria ? false : true}
            margin="dense"
            fullWidth
          >
            {categories.map((categorie, index) => (
              <MenuItem value={categorie.nombre} key={index}>
                {categorie.nombre}
              </MenuItem>
            ))}
          </TextField>
          <Typography
            color={!errors?.categoria ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.categoria
              ? "Seleccioná la categoría de tu Producto/Servicio"
              : errors.categoria.message}
          </Typography>

          {/* Email */}
          <TextField
            {...register("email")}
            id="email"
            label="Correo electrónico*"
            error={!errors?.email ? false : true}
            margin="dense"
            fullWidth
          />
          <Typography
            color={!errors?.email ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.email
              ? "El mismo con el que te registraste o uno diferente"
              : errors.email.message}
          </Typography>

          {/* Teléfono */}
          <TextField
            {...register("telefono")}
            id="telefono"
            label="Teléfono o Whatsapp*"
            error={!errors?.telefono ? false : true}
            margin="dense"
            fullWidth
          />
          <Typography
            color={!errors?.telefono ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.telefono
              ? "Con el siguiente formato +54 9 261 002 002"
              : errors.telefono.message}
          </Typography>

          {/* Instagram */}
          <TextField
            {...register("instagram")}
            id="instagram"
            label="Instagram"
            error={!errors?.instagram ? false : true}
            margin="dense"
            fullWidth
          />
          <Typography
            color={!errors?.instagram ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.instagram
              ? "Podés pegar el link de tu perfil"
              : errors.instagram.message}
          </Typography>

          {/* Facebook */}
          <TextField
            {...register("facebook")}
            id="facebook"
            label="Facebook"
            error={!errors?.facebook ? false : true}
            margin="dense"
            fullWidth
          />
          <Typography
            color={!errors?.facebook ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.facebook
              ? "Podés pegar el link de tu perfil"
              : errors.facebook.message}
          </Typography>

          {/* País */}
          <TextField
            {...register("pais")}
            id="pais"
            select
            defaultValue=""
            label="País*"
            error={!errors?.pais ? false : true}
            margin="dense"
            fullWidth
          >
            {countries.map((country, index) => (
              <MenuItem
                value={country.nombre}
                onClick={() => {
                  setSelectedCountry(country.nombre);
                }}
                key={index}
              >
                {country.nombre}
              </MenuItem>
            ))}
          </TextField>
          <Typography
            color={!errors?.pais ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.pais
              ? "Seleccioná un país de la lista"
              : errors.pais.message}
          </Typography>

          {/* Provincia */}
          <TextField
            {...register("provincia")}
            id="provincia"
            select
            defaultValue=""
            label="Provincia/Estado*"
            error={!errors?.provincia ? false : true}
            margin="dense"
            fullWidth
          >
            {states.map((state, index) => (
              <MenuItem value={state.nombre} key={index}>
                {state.nombre}
              </MenuItem>
            ))}
          </TextField>
          <Typography
            color={!errors?.provincia ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.provincia
              ? "Seleccioná una provincia/estado de la lista"
              : errors.provincia.message}
          </Typography>

          {/* Ciudad */}
          <TextField
            {...register("ciudad")}
            id="ciudad"
            label="Ciudad*"
            error={!errors?.ciudad ? false : true}
            margin="dense"
            fullWidth
          />
          <Typography
            color={!errors?.ciudad ? "negro.main" : "rojo.main"}
            component="p"
            className={styles.helperTextAndErrors}
          >
            {!errors?.ciudad
              ? "Sin abreviaturas, nombre completo"
              : errors.ciudad.message}
          </Typography>

          {/* Descripción Larga */}
          <TextField
            {...register("descripcionLarga")}
            id="descripcionLarga"
            label="Descripción del Producto/Servicio"
            error={!errors?.descripcionLarga ? false : true}
            rows={6}
            margin="dense"
            onInput={(e) => setCharactersCount2(e.target.value.length)}
            multiline
            fullWidth
          />
          <Box className={styles.containerHelperTextAndErrors}>
            <Typography
              color={!errors?.descripcionLarga ? "negro.main" : "rojo.main"}
              component="p"
              className={styles.helperTextAndErrors}
            >
              {!errors?.descripcionLarga
                ? "Máximo 300 caracteres"
                : errors.descripcionLarga.message}
            </Typography>
            <Typography
              color={!errors?.descripcionLarga ? "negro.main" : "rojo.main"}
              component="p"
              className={styles.helperTextAndErrors}
            >
              {`${charactersCount2}/300`}
            </Typography>
          </Box>

          {/* Imágenes */}
          {imagesUrl.length > 0 && (
            <Box className={styles.containerImages}>
              {imagesUrl.map((imageUrl, index) => (
                <Box className={styles.containerImage} key={index}>
                  <IconButton
                    color="blanco"
                    onClick={() => deleteImage(index)}
                    className={styles.buttonClose}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                  <img src={imageUrl} className={styles.images} />
                </Box>
              ))}
            </Box>
          )}

          <Box className={styles.sectionButtonUpload}>
            <Box className={styles.containerButtonUpload}>
              <Button
                component="label"
                variant="contained"
                color="violeta"
                startIcon={<FileUploadOutlinedIcon />}
                sx={{ color: "blanco.main" }}
                className={styles.uploadButton}
                disableElevation
              >
                Subir imagen
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png, image/webp"
                  style={{ display: "none" }}
                  onChange={addImages}
                  multiple
                />
              </Button>
              {!errorImages ? (
                <>
                  <Typography
                    color="negro.main"
                    component="p"
                    className={styles.textUploadConditions}
                  >
                    *Requerida al menos una imagen
                  </Typography>
                  <Typography
                    color="negro.main"
                    component="p"
                    className={styles.textUploadConditions}
                  >
                    Hasta 3 imágenes
                  </Typography>
                  <Typography
                    color="negro.main"
                    component="p"
                    className={styles.textUploadConditions}
                  >
                    Máximo 3MB cada una
                  </Typography>
                </>
              ) : (
                <Typography
                  color="rojo.main"
                  component="p"
                  className={styles.textUploadConditions}
                >
                  {errorImages}
                </Typography>
              )}
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="violeta"
            onClick={handleSubmit(submit)}
            sx={{ color: "blanco.main" }}
            className={styles.buttonUpload}
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

export default CargarProductoServicio;
