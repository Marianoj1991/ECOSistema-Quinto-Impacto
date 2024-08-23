export function ordenarPublicacionesPorFecha(publicaciones) {
    return publicaciones.sort((a, b) => {
      const dateA = new Date(a.fechaAlta.split('-').reverse().join('-')); 
      const dateB = new Date(b.fechaAlta.split('-').reverse().join('-'));
      return dateB - dateA;
    });
  }