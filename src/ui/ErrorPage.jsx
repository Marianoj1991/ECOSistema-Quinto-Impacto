import { Link, useRouteError } from 'react-router-dom'

// ESTILOS
import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  const error = useRouteError()
  
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className={styles.linkContainer}>
        <Link to={'/'} className={styles.link} >
          A inicio
        </Link>
      </div>
    </div>
  )
}
