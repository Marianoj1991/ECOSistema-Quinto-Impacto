import { Tecnologia } from "../../estaticos/icon/Tecnologia";
import { Indumentaria } from "../../estaticos/icon/Indumentaria";
import { Bienestar } from "../../estaticos/icon/Bienestar";
import { Gastronomia } from "../../estaticos/icon/Gastronomia";
import { Cultivos } from "../../estaticos/icon/Cultivos";
import { Transporte } from "../../estaticos/icon/Transporte";
import { Reciclaje } from "../../estaticos/icon/Reciclaje";
import { Capacitaciones } from "../../estaticos/icon/Capacitaciones";
import { MueblesDeco } from "../../estaticos/icon/MueblesDeco";
import { Merchandising } from "../../estaticos/icon/Merchandising";
import { Construccion } from "../../estaticos/icon/Construccion";
import { getCategoriasAxios } from "../../servicios/getAxios";

async function getCategorias () {
  try {
    const categoriasBack = await getCategoriasAxios()
    const categorias = categoriasBack
    return categorias 
  } catch(err) {
    const categorias = []
    return categorias
  }
}

async function inicializacion () {

  const categorias = await getCategorias()
  
  const infoBotones = [
    { id: 1, texto: categorias[2]?.nombre, icono: <Construccion /> },
    { id: 2, texto: categorias[9]?.nombre, icono: <Tecnologia /> },
    { id: 3, texto: categorias[5]?.nombre, icono: <Indumentaria /> },
    { id: 4, texto: categorias[0]?.nombre, icono: <Bienestar /> },
    { id: 5, texto: categorias[4]?.nombre, icono: <Gastronomia /> },
    { id: 6, texto: categorias[3]?.nombre, icono: <Cultivos /> },
    { id: 7, texto: categorias[10]?.nombre, icono: <Transporte /> },
    { id: 8, texto: categorias[8]?.nombre, icono: <Reciclaje /> },
    { id: 9, texto: categorias[1]?.nombre, icono: <Capacitaciones /> },
    { id: 10, texto: categorias[7]?.nombre, icono: <MueblesDeco /> },
    { id: 11, texto: categorias[6]?.nombre, icono: <Merchandising /> }
  ]

  return infoBotones

}

export const categorias = await inicializacion()

