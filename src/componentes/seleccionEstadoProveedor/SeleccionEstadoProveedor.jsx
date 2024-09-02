import { useEffect, useState } from "react";
import { actualizarFeedbackEstado } from "../../servicios/putAxios";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
// import InputLabel from '@mui/material/InputLabel'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Alerta from "../alerta/Alerta";

const mensajesAlertaObj = {
  aprobado: "Producto/Servicio aprobado con éxito.",
  revision: "El Producto/Servicio require cambios",
  denegado: "Producto/Servicio denegado",
};

const SeleccionEstadoProveedor = ({
  nombre,
  descripcionCorta,
  categoria,
  email,
  telefono,
  instagram,
  pais,
  provincia,
  ciudad,
  descripcionLarga,
  imagenes,
  id,
  handleEditando,
}) => {
  const [estado, setEstado] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [devolucion, setDevolucion] = useState("");
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [mensajesAlerta, setMensajesAlerta] = useState("");

  const aprobarProductoServicio = async () => {
    const data = {
      feedback: "Producto/servicio aprobado.",
      estado: "ACEPTADO",
    };
    try {
      const resp = await actualizarFeedbackEstado(id, data);
      setMensajesAlerta(mensajesAlertaObj[estado]);
      setOpenSuccessAlert(true);
    } catch (err) {
      setOpenErrorAlert(true);
    } finally {
      setEstado("");
    }
  };

  useEffect(() => {
    if (estado === "aprobado") {
      aprobarProductoServicio();
    }
  }, [estado]);

  const handleSubmit = async () => {
    if (devolucion.length > 0) {
      // Aquí iría la lógica para enviar la devolución
      const data = {
        feedback: devolucion,
        estado: estado === "revision" ? "REQUIERE_CAMBIOS" : "DENEGADO",
      };
      try {
        const resp = await actualizarFeedbackEstado(id, data);
        setMensajesAlerta(mensajesAlertaObj[estado]);
        setOpenSuccessAlert(true);
      } catch (err) {
        console.log("Hubo un error");
        setOpenErrorAlert(true);
      } finally {
        setDevolucion("");
        setEstado("");
      }
    }
    // alert('Devolución enviada: ' + devolucion)
  };

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  const handleClickOpen = (index) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDevolucionChange = (event) => {
    setDevolucion(event.target.value);
  };

  const handleAccept = () => {
    setOpenSuccessAlert(false);
    handleEditando();
  };

  const handleCancel = () => {
    setOpenErrorAlert(false);
    handleEditando();
  };

  const handleRetry = () => {
    setOpenErrorAlert(false);
    handleSubmit();
  };

  const RenderEstado = () => {
    let color;
    let text;
    switch (estado) {
      case "aprobado":
        color = "verdeExito.main";
        text = "Aprobado";
        break;
      case "revision":
        color = "naranja.main";
        text = "En revisión";
        break;
      case "denegado":
        color = "rojo.main";
        text = "Denegado";
        break;
      default:
        color = "transparent";
        text = "";
    }
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: 2,
        }}
      >
        <CircleIcon
          sx={{ color: color, marginRight: 1, height: 24, width: 24 }}
        />
        <Typography variant="p" sx={{ fontSize: 18, fontWeight: 700 }}>
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ pr: 1, pl: 1 }}>
      <Alerta
        type="success"
        mainMessage={mensajesAlerta}
        openAlert={openSuccessAlert}
        handleAccept={handleAccept}
      />
      <Alerta
        type="error"
        mainMessage="Lo sentimos, el Producto/Servicio no pudo ser actualizado"
        minorMessage="Por favor, volvé a intentarlo."
        openAlert={openErrorAlert}
        handleCancel={handleCancel}
        handleRetry={handleRetry}
      />

      {estado && RenderEstado()}
      <Box sx={{ display: "flex", justifyContent: "end", border: "none" }}>
        <FormControl
          sx={{
            m: 1,
            mr: 2,
            minWidth: 150,
            backgroundColor: "grisClaro.main",
            border: "none",
          }}
          size="small"
        >
          <Select
            variant="standard"
            labelId="estado-select-label"
            id="estado-select"
            value={""}
            onChange={(event) => handleChange(event, id)}
            sx={{
              padding: 0.5,
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              backgroundColor: "grisClaro.main",
            }}
          >
            <MenuItem
              value="aprobado"
              sx={{
                backgroundColor: "grisClaro.main",
              }}
            >
              <CircleIcon sx={{ color: "verdeExito.main", marginRight: 1 }} />
              Aprobado
            </MenuItem>
            <MenuItem
              value="revision"
              sx={{
                backgroundColor: "grisClaro.main",
              }}
            >
              <CircleIcon sx={{ color: "naranja.main", marginRight: 1 }} />
              En revisión
            </MenuItem>
            <MenuItem
              value="denegado"
              sx={{
                backgroundColor: "grisClaro.main",
              }}
            >
              <CircleIcon sx={{ color: "rojo.main", marginRight: 1 }} />
              Denegado
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {estado === "revision" || estado === "denegado" ? (
        <Box sx={{ margin: 2 }}>
          <Box
            sx={{
              backgroundColor: "grisClaro.main",
              borderRadius: 1,
              marginBottom: 2,
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontWeight: 700,
                fontSize: 16,
                color: "black.main",
                marginLeft: 1,
              }}
            >
              Devolución al Proveedor (Obligatorio)
            </Typography>
            <TextField
              fullWidth
              multiline
              value={devolucion}
              onChange={handleDevolucionChange}
              placeholder="Escribe tu mensaje aquí..."
              inputProps={{ maxLength: 300 }}
              sx={{ border: 0, fontSize: 16, fontWeight: 400 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginX: 1,
                marginTop: 1,
              }}
            >
              <Typography variant="caption" sx={{ fontSize: 14 }}>
                Máximo 300 caracteres
              </Typography>
              <Typography variant="caption" sx={{ fontSize: 14 }}>
                {devolucion.length}/300
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={devolucion.length === 0}
            sx={{
              width: "100%",
              height: 40,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: "16px",
              color: "blanco.main",
              textTransform: "capitalize",
              backgroundColor:
                devolucion.length > 0 ? "violeta.main" : "grisOscuro.main",
              "&:hover": {
                backgroundColor:
                  devolucion.length > 0 ? "violeta.dark" : "grisOscuro.dark",
              },
              marginTop: 2,
            }}
          >
            Enviar
          </Button>
        </Box>
      ) : null}

      {/* FORMULARIOS */}
      <Box
        sx={{
          overflow: "hidden",
          "& .MuiTextField-root": {
            m: 2,
            width: "calc(100% - 32px)",
          },
          "& .MuiInputLabel-root": {
            color: "violeta.main",
          },
        }}
      >
        <Box
          sx={{
            color: "violeta.main",
            textAlign: "center",
            fontSize: 22,
            fontWeight: 700,
            padding: 0.5,
          }}
        >
          {nombre}
        </Box>
        <Box
          sx={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: 500,
            padding: 0.5,
          }}
        >
          {descripcionCorta}
        </Box>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Categoría"
            defaultValue={categoria}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Correo electrónico"
            defaultValue={email}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Teléfono o Whatsapp"
            defaultValue={telefono}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Instagram"
            defaultValue={instagram}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="País"
            defaultValue={pais}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Provincia/Estado"
            defaultValue={provincia}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Ciudad"
            defaultValue={ciudad}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            multiline
            rows={4}
            id="outlined-read-only-input"
            label="Descripción del Producto/Servicio*"
            defaultValue={descripcionLarga}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <Box sx={{ marginX: 2 }}>
          <Grid container spacing={2}>
            {imagenes?.map((img, index) => (
              <Grid item xs={4} key={index}>
                <Box sx={{ position: "relative", width: "100%" }}>
                  <img
                    src={img.url}
                    alt={`img-${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <IconButton
                    onClick={() => handleClickOpen(index)}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      backgroundColor: alpha("#222222", 0.6),
                      borderRadius: "50%",
                      padding: 0.5,
                    }}
                  >
                    <ZoomInIcon />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* IMAGEN EN PANTALLA
       */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Carousel
            selectedItem={selectedImage}
            onChange={(index) => setSelectedImage(index)}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
          >
            {imagenes?.map((img, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={img.url}
                  alt={`carousel-img-${index}`}
                  style={{ maxHeight: "80vh", maxWidth: "100%" }}
                />
              </div>
            ))}
          </Carousel>
        </Box>
      </Dialog>
    </Box>
  );
};

export default SeleccionEstadoProveedor;
