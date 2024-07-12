
import styles from "./Buscador.module.css";

function Buscador({ manejarBusqueda, color }) {

  const onKeyUp = (e) => {
    const { value } = e.target
    if(e.key === 'Enter') {
      manejarBusqueda(value)
      e.target.value = ''
    }
  }

  return (
    <input
      style={{backgroundColor: color}}
      onKeyUp={onKeyUp}
      type="text" 
      className={styles.cajaBuscador} 
      id="searchBox" 
      placeholder="Buscar Proveedores" 
    />
  );
}
export default Buscador;
