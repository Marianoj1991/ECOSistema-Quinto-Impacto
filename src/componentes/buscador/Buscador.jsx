import React from 'react';
import styles from "./Buscador.module.css";

function Buscador() {
  return (
    <input 
      type="text" 
      className={styles.cajaBuscador} 
      id="searchBox" 
      placeholder="Buscar Proveedores" 
    />
  );
};

export default Buscador;
