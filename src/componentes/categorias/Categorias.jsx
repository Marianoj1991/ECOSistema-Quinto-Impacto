import { BotonCategoria } from '../botonCategoria/index'
import { Button, Grid, Typography } from '@mui/material'
import { inicializacion } from '../botonCategoria/botones-info'

// Estilos CSS
import styles from './Categorias.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Categorias() {
  const [nombresCategorias, setNombresCategorias] = useState([])

  const buscarNombresCategorias = async () => {
    try {
      const nombresCategorias = await inicializacion()
      setNombresCategorias(nombresCategorias)
    } catch (err) {
      setNombresCategorias([])
    }
  }

  useEffect(() => {
    buscarNombresCategorias()
  }, [])

  return (
    <Grid
      className={styles.categoriasContenedor}
      container
      direction='column'
      alignItems='center'
      gap={1}
    >
      <Grid item>
        <Grid container flexDirection='column'>
          <Grid item>
            <Typography variant='h6' className={styles.titulo}>
              Red de Proveedores ECO
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={styles.tituloCategoria} variant='h6'>
              Categorías
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ padding: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {nombresCategorias?.slice(0, 8).map((dato) => (
            <BotonCategoria
              key={dato.id}
              icono={dato.icono}
              texto={dato.texto}
              border={true}
              seccCategorias={false}
            />
          ))}
        </Grid>
      </Grid>

      <Grid item />
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#4E169D',
          width: '184px',
          height: '40px',
          borderRadius: '100px',
          padding: '10px, 24px, 10px, 24px',
          gap: '10px'
        }}
      >
        <Link className={styles.linkCategorias} to='/categorias'>
          <Typography
            sx={{
              textTransform: 'none',
              fontFamily: 'Nunito',
              fontWeight: 700,
              fontSize: '16px'
            }}
          >
            Ver más categorías
          </Typography>
        </Link>
      </Button>
    </Grid>
  )
}
