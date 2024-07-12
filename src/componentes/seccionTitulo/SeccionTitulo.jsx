
import styles from "./SeccionTitulo.module.css";

function SeccionTitulo({ categoria, texto, titulo, imagen, children }) {

  return (
    <section className={styles.titulo} style={{ backgroundImage: `url(${imagen})`}}>
      { children }
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