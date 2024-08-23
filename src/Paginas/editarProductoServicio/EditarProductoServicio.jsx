// PENDIENTE: Borrado de imágenes existentes NO implementado en integración Front-Back. Se pueden agregar nuevas imágenes a las existentes hasta los límites permitidos

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import Alerta from "../../componentes/alerta/Alerta";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  getProductoServicioByUser,
  getCategorias,
  getPaises,
  getProvincias,
} from "@/servicios/getAxios";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import productServiceSchema from "../../validations/productService";
import { putProductoServicio } from "../../servicios/putAxios";
import supportedImageFormats from "../../conf/supportedImageFormats";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./EditarProductoServicio.module.css";

function EditarProductoServicio() {
  const { id: productServiceId } = useParams();

  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [gettingProductService, setGettingProductService] = useState(true);
  const [productService, setProductService] = useState({});
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

  // Obtener todos los datos necesarios para que el formulario se cargue correctamente con los valores actuales del Producto/Servicio
  const getInitialData = async () => {
    const categories = await getCategorias();
    const countries = await getPaises();
    const productService = await getProductoServicioByUser(productServiceId);
    const states = await getProvincias(productService.data.pais);

    setCategories(categories.data);
    setCountries(countries.data);
    setProductService(productService.data);
    setStates(states.data);

    const existingImages = [];
    const existingImagesUrl = [];

    for (const image of productService.data.imagenes) {
      existingImages.push(image.url);
      existingImagesUrl.push(image.url);
    }

    setImages(existingImages);
    setImagesUrl(existingImagesUrl);

    setGettingProductService(false);

    return productService.data;
  };

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
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productServiceSchema),
    defaultValues: getInitialData,
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
    const fileListImages = e.target.files;

    if (!fileListImages.length) return;

    // Convertir interfaz FileList (similar a un objeto) en Array, para modificar la longitud del Array en la siguiente línea de código
    const arrayImages = Array.from(fileListImages);

    // Si el usuario quiere cargar por primera vez más de las 3 imágenes permitidas, o si ya ha cargado imágenes y quiere cargar más del total de 3 imágenes permitidas; únicamente se toman las 3 primeras imágenes dentro del Array (primera vez) o la cantidad de imágenes que falten para completar 3 imágenes (segunda vez en adelante)
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

      // Crear una URL para representar la imagen y poder mostrarla en vista previa antes de la carga en el backend
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

    // Eliminar la referencia en el navegador a la URL de la imagen borrada en vista previa
    URL.revokeObjectURL(deletedImageUrl);

    setImages(imagesCopy);
    setImagesUrl(imagesUrlCopy);
  };

  const submit = async (data) => {
    if (!images.length) {
      setErrorImages("Subí al menos una imagen");
      return;
    }

    const formData = new FormData();

    formData.append("nombre", data.nombre);
    formData.append("descripcionCorta", data.descripcionCorta);
    formData.append("descripcionLarga", data.descripcionLarga);
    formData.append("telefono", data.telefono);
    formData.append("email", data.email);
    formData.append("facebook", data.facebook);
    formData.append("instagram", data.instagram);
    formData.append("pais", data.pais);
    formData.append("provincia", data.provincia);
    formData.append("ciudad", data.ciudad);
    formData.append("categoria", data.categoria);

    // Únicamente se cargan las nuevas imágenes, no las que ya existían
    for (const i in images) {
      if (images[i] instanceof File) {
        formData.append(`imagen${Number(i) + 1}`, images[i]);
      }
    }

    try {
      await putProductoServicio(productServiceId, formData);

      setOpenSuccessAlert(true);
    } catch (error) {
      setOpenErrorAlert(true);
    }
  };

  return (
    <>
      <Alerta
        type="success"
        mainMessage="Cambios guardados con éxito"
        openAlert={openSuccessAlert}
        handleAccept={handleAccept}
      />
      <Alerta
        type="error"
        mainMessage="Lo sentimos, los cambios no se pudieron guardar"
        minorMessage="Por favor, volvé a intentarlo."
        openAlert={openErrorAlert}
        handleCancel={handleCancel}
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

        {!gettingProductService && (
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
              {...register("descripcionCorta")}
              id="descripcionCorta"
              InputLabelProps={{ shrink: true }}
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
              defaultValue={productService.categoria}
              label="Categoría*"
              error={!errors?.categoria ? false : true}
              margin="dense"
              fullWidth
            >
              {categories.map((category) => (
                <MenuItem value={category.nombre} key={category.id}>
                  {category.nombre}
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
              defaultValue={productService.pais}
              label="País*"
              error={!errors?.pais ? false : true}
              margin="dense"
              fullWidth
            >
              {countries.map((country) => (
                <MenuItem
                  value={country.nombre}
                  onClick={() => {
                    resetField("provincia", { defaultValue: "" });
                    setSelectedCountry(country.nombre);
                  }}
                  key={country.id}
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
              defaultValue={productService.provincia}
              label="Provincia/Estado*"
              error={!errors?.provincia ? false : true}
              margin="dense"
              fullWidth
            >
              {states.map((state) => (
                <MenuItem value={state.nombre} key={state.id}>
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
              {...register("descripcionLarga")}
              id="descripcionLarga"
              InputLabelProps={{ shrink: true }}
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
        )}
      </Box>
    </>
  );
}

export default EditarProductoServicio;
