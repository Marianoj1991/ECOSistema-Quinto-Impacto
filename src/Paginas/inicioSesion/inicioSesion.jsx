import TarjetaInicioSesion from "@/componentes/tarjetaInicioSesion/TarjetaInicioSesion";
import BarraNavegacion from "@/componentes/barraNavegacion/BarraNavegacion";
import style from "./InicioSesion.module.css";

const InicioSesion = () => {
  return (
    <div className={style.container}>
      <BarraNavegacion hideUserIcon={true} />
      <div className={style.CardSesion}>
        <TarjetaInicioSesion />
      </div>
    </div>
  );
};
export default InicioSesion;
