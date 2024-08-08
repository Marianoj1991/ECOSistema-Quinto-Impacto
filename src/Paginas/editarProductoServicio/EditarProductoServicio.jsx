// PENDIENTE: Select inputs no toman defaultValue de useForm.
// PENDIENTE: Edición de imágenes NO implementada.

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Alerta from "../../componentes/alerta/Alerta";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import productServiceSchema from "../../validations/productService";
import supportedImageFormats from "../../conf/supportedImageFormats";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { getProductoById,  
  getCategoriasAxios,
  getPaises,
  getProvincia } from '@/servicios/getAxios'; 
  import {  putProducto } from '@/servicios/putAxios';
import styles from "./EditarProductoServicio.module.css";

function EditarProductoServicio() {
  const { id } = useParams();

  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [productService, setProductService] = useState([]);
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

  const getProductService = async () => {
    try {
      const response = await getProductoById(id);
      setProductService(response.data);
      console.log(response)
    } catch (error) {
      console.error("Error al obtener el producto/servicio: ", error);
    }
  };

  const getCategoriesCountriesStates = async () => {
    const categoriesResponse = await getCategoriasAxios()
    setCategories(categoriesResponse);
    console.log(categoriesResponse)

    const countriesResponse = await getPaises();
    setCountries(countriesResponse.data);
    console.log(countriesResponse.data)
  };

  useEffect(() => {
    getProductService();
    getCategoriesCountriesStates();
  }, []);

  const getStates = async (country) => {
    const statesResponse = await getProvincia(country);
    setStates(statesResponse.data);
    console.log(statesResponse)
  };

  useEffect(() => {
    if (!selectedCountry) return;

    getStates(selectedCountry);
  }, [selectedCountry]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(productServiceSchema),
  });
  
  useEffect(() => {
    if (productService) {
      reset(productService); // Aca actualizo los valores del formulario
    }
  }, [productService, reset]);

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

    // PENDIENTE: Renombrar campos descripcion y feedback, y permitir que campo imagen reciba un array de archivos.

    const bodyData = {
      nombre: data.nombre || "",
      descripcion: data["descripcion-corta"] || "",
      telefono: data.telefono || "",
      email: data.email || "",
      facebook: data.facebook || "",
      instagram: data.instagram || "",
      pais: data.pais || "Colombia",
      provincia: data.provincia || "Risaralda",
      ciudad: data.ciudad || "",
      categoria: data.categoria || "Bienestar",
      imagen:
        "https://www.shutterstock.com/shutterstock/photos/1900942717/display_1500/stock-photo-beautiful-view-of-lago-di-braise-south-tyrol-1900942717.jpg",
      feedback: data["descripcion-larga"] || "",
      
    };

    // PENDIENTE: Terminar con recuperación de ID del usuario desde localStorage.
    // localStorage.getItem("user");
console.log('Esto se envia a back',bodyData)
    try {
      const response = await putProducto(id, bodyData);
      if (response.status === 200) {
        setOpenSuccessAlert(true);
      } else {
        setOpenErrorAlert(true);
      }
    } catch (error) {
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
          Edición de Producto/Servicio
        </Typography>
        <Typography
          color="negro.main"
          component="h2"
          className={styles.subtitle}
        >
          Editá el formulario de carga de tu Producto/Servicio
        </Typography>

        <Box component="form" autoComplete="off" noValidate>
          {/* Nombre */}
          <TextField
            {...register("nombre")}
            id="nombre"
            InputLabelProps={{ shrink: true }}
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
            {...register("descripcion-corta")}
            id="descripcion-corta"
            InputLabelProps={{ shrink: true }}
            label="Breve descripción del Producto/Servicio*"
            error={!errors["descripcion-corta"] ? false : true}
            margin="dense"
            onInput={(e) => setCharactersCount1(e.target.value.length)}
            fullWidth
          />
          <Box className={styles.containerHelperTextAndErrors}>
            <Typography
              color={!errors["descripcion-corta"] ? "negro.main" : "rojo.main"}
              component="p"
              className={styles.helperTextAndErrors}
            >
              {!errors["descripcion-corta"]
                ? "Se visualizará en el subtítulo de la publicación"
                : errors["descripcion-corta"].message}
            </Typography>
            <Typography
              color={!errors["descripcion-corta"] ? "negro.main" : "rojo.main"}
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
            label={productService.categoria}
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
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
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
            label={productService.pais}
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
            label={productService.provincia}
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
            InputLabelProps={{ shrink: true }}
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
            {...register("descripcion-larga")}
            id="descripcion-larga"
            InputLabelProps={{ shrink: true }}
            label="Descripción del Producto/Servicio"
            error={!errors["descripcion-larga"] ? false : true}
            rows={6}
            margin="dense"
            onInput={(e) => setCharactersCount2(e.target.value.length)}
            multiline
            fullWidth
          />
          <Box className={styles.containerHelperTextAndErrors}>
            <Typography
              color={!errors["descripcion-larga"] ? "negro.main" : "rojo.main"}
              component="p"
              className={styles.helperTextAndErrors}
            >
              {!errors["descripcion-larga"]
                ? "Máximo 300 caracteres"
                : errors["descripcion-larga"].message}
            </Typography>
            <Typography
              color={!errors["descripcion-larga"] ? "negro.main" : "rojo.main"}
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

export default EditarProductoServicio;
