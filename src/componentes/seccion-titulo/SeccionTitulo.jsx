
import styles from "./SeccionTitulo.module.css";
import Buscador from '../buscador/Buscador';

function SeccionTitulo({ categoria, texto, titulo, imagen }) {

  return (
    <section className={styles.titulo} style={{ backgroundImage: `url(${imagen})`}}>
      <Buscador />
      <div className={styles.contenedorTitulo}>
        <h1>{categoria}</h1>
        <p className={styles.cajaTexto}>
          {titulo}
        </p>
        {
          texto && <p className={styles.textoCondicional}>{texto}</p>
        }
      </div>
    </section>
  );     
}

export default SeccionTitulo;