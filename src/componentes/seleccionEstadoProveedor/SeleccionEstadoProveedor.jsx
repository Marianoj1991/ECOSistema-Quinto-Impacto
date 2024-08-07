import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircleIcon from '@mui/icons-material/Circle';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SeleccionEstadoProveedor = () => {
    const [estado, setEstado] = useState('nuevo');
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [devolucion, setDevolucion] = useState('');
    const images = [
        'https://via.placeholder.com/800x600', // Reemplaza estas URLs con tus imágenes
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
    ];

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

    const handleSubmit = () => {
        if (devolucion.length > 0) {
            // Aquí iría la lógica para enviar la devolución
            alert('Devolución enviada: ' + devolucion);
            setDevolucion('');
        }
    };

    const renderEstado = () => {
        let color;
        let text;
        switch (estado) {
            case 'aprobado':
                color = 'verdeExito.main';
                text = 'Aprobado';
                break;
            case 'revision':
                color = 'naranja.main';
                text = 'En revisión';
                break;
            case 'denegado':
                color = 'rojo.main';
                text = 'Denegado';
                break;
            default:
                color = 'transparent';
                text = '';
        }
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 2 }}>
                <CircleIcon sx={{ color: color, marginRight: 1, height: 24, width: 24 }} />
                <Typography variant="p" sx={{ fontSize: 18, fontWeight: 700 }}>{text}</Typography>
            </Box>
        );
    };

    return (
        <>
            {renderEstado()}
            <Box sx={{ display: 'flex', justifyContent: 'end', border: 'none' }}>
                <FormControl
                    sx={{ m: 1, minWidth: 120, backgroundColor: 'grisClaro.main', border: 'none' }}
                    size="small"
                >
                    <InputLabel id="estado-select-label">Estado</InputLabel>
                    <Select
                        labelId="estado-select-label"
                        id="estado-select"
                        value={estado}
                        label="Estado"
                        onChange={handleChange}
                        sx={{
                            fontSize: 16,
                            backgroundColor: 'grisClaro.main',
                        }}
                    >
                        <MenuItem value="aprobado">
                            <CircleIcon sx={{ color: 'verdeExito.main', marginRight: 1 }} />Aprobado
                        </MenuItem>
                        <MenuItem value="revision">
                            <CircleIcon sx={{ color: 'naranja.main', marginRight: 1 }} />En revisión
                        </MenuItem>
                        <MenuItem value="denegado">
                            <CircleIcon sx={{ color: 'rojo.main', marginRight: 1 }} />Denegado
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {estado === 'revision' || estado === 'denegado' ? (
        <Box sx={{ margin: 2 }}>
          <Box sx={{ backgroundColor: 'grisClaro.main', borderRadius: 1, marginBottom: 2 }}>
            <Typography
              variant="p"
              sx={{
                fontWeight: 700,
                fontSize: 16,
                color: 'black.main',
                marginLeft: 1,
              }}
            >
              Devolución al Proveedor (Obligatorio)
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              maxRows={4}
              value={devolucion}
              onChange={handleDevolucionChange}
              placeholder="Escribe tu mensaje aquí..."
              inputProps={{ maxLength: 300 }}
              sx={{ border: 0, fontSize: 16, fontWeight: 400 }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: 1, marginTop: 1 }}>
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
              width: '100%',
              height: 40,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '16px',
              color: 'blanco.main',
              textTransform: 'capitalize',
              backgroundColor: devolucion.length > 0 ? 'violeta.main' : 'grisOscuro.main',
              '&:hover': {
                backgroundColor: devolucion.length > 0 ? 'violeta.dark' : 'grisOscuro.dark',
              },
              marginTop: 2,
            }}
          >
            Enviar
          </Button>
        </Box>
      ) : null}
            <Box sx={{
                overflow: 'hidden',
                '& .MuiTextField-root': {
                    m: 2,
                    width: 'calc(100% - 32px)',
                },
                '& .MuiInputLabel-root': {
                    color: 'violeta.main',
                }
            }}>
                <Box sx={{ color: 'violeta.main', textAlign: 'center', fontSize: 22, fontWeight: 700, padding: 0.5 }}>
                    Lavanda
                </Box>
                <Box sx={{ textAlign: 'center', fontSize: 18, fontWeight: 500, padding: 0.5 }}>
                    Cosmética natural
                </Box>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Categoría"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Correo electrónico"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Teléfono o Whatsapp"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Instagram"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="País"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Provincia/Estado"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Ciudad"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Descripción del Producto/Servicio*"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <Box sx={{ marginX: 2 }}>
                    <Grid container spacing={2}>
                        {images.map((src, index) => (
                            <Grid item xs={4} key={index}>
                                <Box sx={{ position: 'relative', width: '100%' }}>
                                    <img src={src} alt={`img-${index}`} style={{ width: '100%', height: 'auto' }} />
                                    <IconButton
                                        onClick={() => handleClickOpen(index)}
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            backgroundColor: alpha('#222222', 0.6),
                                            borderRadius: '50%',
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
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: 'white',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                }}>
                    <Carousel
                        selectedItem={selectedImage}
                        onChange={(index) => setSelectedImage(index)}
                        showArrows={true}
                        showThumbs={false}
                        showStatus={false}
                    >
                        {images.map((src, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={src} alt={`carousel-img-${index}`} style={{ maxHeight: '80vh', maxWidth: '100%' }} />
                            </div>
                        ))}
                    </Carousel>
                </Box>
            </Dialog>
        </>
    );
};

export default SeleccionEstadoProveedor;
