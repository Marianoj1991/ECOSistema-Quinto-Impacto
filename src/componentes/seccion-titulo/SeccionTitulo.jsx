import React from 'react';
import styles from "./SeccionTitulo.module.css";
import Buscador from '../buscador/Buscador';

function SeccionTitulo() {
  return (
    <section className={styles.titulo}>
      <Buscador />
      <div className={styles.contenedorTitulo}>
        <h1>Red de impacto</h1>
        <p className={styles.cajaTexto}>
          Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente
        </p>
      </div>
    </section>
  );
};

export default SeccionTitulo;