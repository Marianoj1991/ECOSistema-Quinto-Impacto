import TarjetaRegistro from "@/componentes/tarjetaRegistro/TarjetaRegistro";
import BarraNavegacion from "@/componentes/barraNavegacion/BarraNavegacion";
import style from "./Registro.module.css";

function Registro() {
  return (
    <div className={style.container}>
      <BarraNavegacion hideUserIcon={true} />
      <div className={style.CardRegistro}>
        <TarjetaRegistro />
      </div>
    </div>
  );
}

export default Registro;
