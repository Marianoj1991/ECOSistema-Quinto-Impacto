import { useState } from "react";
import Alerta from "@/componentes/alerta/Alerta";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Typography from "@mui/material/Typography";
import style from "./EditarPublicaciones.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import publicacionServiceSchema from "@/validations/publicacionService";
import supportedImageFormats from "@/conf/supportedImageFormats";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
import { putPublicaciones } from "@/servicios/putAxios";
import { getPublicacionAdminById } from "@/servicios/getAxios";


const EditarPublicaciones = () => {
    const { id: publiId } = useParams();

    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openErrorAlert, setOpenErrorAlert] = useState(false);
    const [charactersCount2, setCharactersCount2] = useState(0);
    const [gettingPublicacion, setGettingPublicacion] = useState(true);
    const [publicacion, setPublicacion] = useState({});
    const [images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    const [errorImages, setErrorImages] = useState("");
  
    const navigate = useNavigate();

      // Obtener todos los datos necesarios para que el formulario se cargue correctamente con los valores actuales del Producto/Servicio
  const getInitialData = async () => {
 
    const publicacionId = await getPublicacionAdminById(publiId);
  
    setPublicacion(publicacionId.data);

    const existingImages = [];
    const existingImagesUrl = [];

    for (const image of publicacionId.data.imagenes) {
      existingImages.push(image.url);
      existingImagesUrl.push(image.url);
    }

    setImages(existingImages);
    setImagesUrl(existingImagesUrl);

    setGettingPublicacion(false);

    return publicacionId.data;
  };
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(publicacionServiceSchema),
      defaultValues: getInitialData,
    });
  
    const handleAccept = () => {
      setOpenSuccessAlert(false);
  
      navigate("/admin/publicaciones");
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
  
      formData.append("titulo", data.titulo);
      formData.append("descripcion", data.descripcion);
  
      for (const i in images) {
        formData.append(`imagen${Number(i) + 1}`, images[i]);
      }
  
      for (const [key, value] of formData.entries()) {
          console.log(key, value);
        }
  
      try {
          console.log(data)
        await putPublicaciones(publiId,formData);
  
        setOpenSuccessAlert(true);
      } catch (error) {
        setOpenErrorAlert(true);
      }
    };



  return (
    <>

    <BarraNavegacion />
    <Box className={style.container}>
      <Typography color="negro.main" component="h1" className={style.title}>
       Edición de publicación
      </Typography>
      <Typography
        color="negro.main"
        component="h2"
        className={style.subtitle}
      >
        Modificá los datos de la publicación
      </Typography>

      {!gettingPublicacion && (<Box component="form" autoComplete="off" noValidate>
        {/* Titulo */}
        <TextField
          {...register("titulo")}
          id="titulo"
          label="Titulo*"
          InputLabelProps={{ shrink: true }}
          error={!errors?.titulo ? false : true}
          margin="dense"
          fullWidth
        />
        <Typography
          color={!errors?.titulo ? "negro.main" : "rojo.main"}
          component="p"
          className={style.helperTextAndErrors}
        >
          {!errors?.titulo
            ? "Se visualizará en el título de la publicación"
            : errors.titulo.message}
        </Typography>

        {/* Contenido de la publicación */}
        <TextField
          {...register("descripcion")}
          id="descripcion"
          label="Ingresá el contenido de la publicación *"
          error={!errors?.descripcion ? false : true}
          InputLabelProps={{ shrink: true }}
          minRows={12}
          maxRows={50}
          variant="outlined"
          margin="dense"
          onInput={(e) => setCharactersCount2(e.target.value.length)}
          multiline
          fullWidth
          className={style.textField}
        />
        <Box className={style.containerHelperTextAndErrors}>
          <Typography
            color={!errors?.descripcion ? "negro.main" : "rojo.main"}
            component="p"
            className={style.helperTextAndErrors}
          >
            {!errors?.descripcion
              ? "Máximo 2.000 caracteres"
              : errors.descripcion.message}
          </Typography>
          <Typography
            color={!errors?.descripcion ? "negro.main" : "rojo.main"}
            component="p"
            className={style.helperTextAndErrors}
          >
            {`${charactersCount2}/2.000`}
          </Typography>
        </Box>

        {/* Imágenes */}
        {imagesUrl.length > 0 && (
          <Box className={style.containerImages}>
            {imagesUrl.map((imageUrl, index) => (
              <Box className={style.containerImage} key={index}>
                <IconButton
                  color="blanco"
                  onClick={() => deleteImage(index)}
                  className={style.buttonClose}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
                <img src={imageUrl} className={style.images} />
              </Box>
            ))}
          </Box>
        )}

        {/* Botón de subir imagen, solo se muestra si hay menos de 3 imágenes */}
        {imagesUrl.length < 3 && (
          <Box className={style.sectionButtonUpload}>
            <Box className={style.containerButtonUpload}>
              <Button
                component="label"
                variant="contained"
                color="violeta"
                startIcon={<FileUploadOutlinedIcon />}
                sx={{ color: "blanco.main" }}
                className={style.uploadButton}
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
                    className={style.textUploadConditions}
                  >
                    *Requerida al menos una imagen
                  </Typography>
                  <Typography
                    color="negro.main"
                    component="p"
                    className={style.textUploadConditions}
                  >
                    Hasta 3 imágenes
                  </Typography>
                  <Typography
                    color="negro.main"
                    component="p"
                    className={style.textUploadConditions}
                  >
                    Máximo 3MB cada una
                  </Typography>
                </>
              ) : (
                <Typography
                  color="rojo.main"
                  component="p"
                  className={style.textUploadConditions}
                >
                  {errorImages}
                </Typography>
              )}
            </Box>
          </Box>
        )}

        <Button
          type="submit"
          variant="contained"
          color="violeta"
          onClick={handleSubmit(submit)}
          sx={{ color: "blanco.main" }}
          className={style.buttonUpload}
          disableElevation
          fullWidth
        >
          Guardar cambios
        </Button>
      </Box>)}
    </Box>
    <Alerta
      type="success"
      mainMessage="Cambios guardados con éxito"
      openAlert={openSuccessAlert}
      handleAccept={handleAccept}
    />
    <Alerta
      type="error"
      mainMessage="Lo sentimos, los cambios no pudieron ser guardados."
      minorMessage="Por favor, volvé a intentarlo."
      openAlert={openErrorAlert}
      handleCancel={handleCancel}
      handleRetry={handleRetry}
    />
  </>
  )
}

export default EditarPublicaciones