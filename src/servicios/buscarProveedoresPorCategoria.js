import { proveedoresServicios } from './proveedoresServicios'

export const obtenerProvPorCat = ( categoria ) => {
  if(!categoria || categoria == '') return []
   const normalizeText = (text) => {
     return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
   }

   const normalizedCategory = normalizeText(categoria)

   return proveedoresServicios.filter(
     (prov) => normalizeText(prov.categoria) === normalizedCategory
   )

}