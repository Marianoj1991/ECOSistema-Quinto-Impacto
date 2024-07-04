
import './App.css'
import { Categorias } from './componentes'
import PageInicioSesion from './Paginas/inicioSesion/inicioSesion'
import PageRegistro from './Paginas/Registro/PaginaRegistro'
import InvitacionRegistro from './componentes/InvitacionRegistro/InvitacionRegistro'
import  { useState } from 'react';
import Alert from './componentes/Alert/alert';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <Categorias />
    <div><PageInicioSesion /></div>
    <div><InvitacionRegistro /></div>
    <div><PageRegistro /></div>
    <div>
      <button onClick={() => setShowAlert(true)}>Mostrar Alerta</button>
      {showAlert && (
        <Alert
          type="success"
          message="Producto/Servicio cargado con éxito"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
    </>
 



    


  )
}

export default App
