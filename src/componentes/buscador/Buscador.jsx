
import { useNavigate } from "react-router-dom";
import styles from "./Buscador.module.css";

function Buscador({ color }) {

  const navigate = useNavigate();

  const manejarBusqueda = (nombreProveedor) => {
    if (!nombreProveedor) {
      return
    }
    navigate(`/busquedas?nombre=${nombreProveedor}`);
  };

  const onKeyUp = (e) => {
    const { value } = e.target
    if (value.length === 0) return
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
