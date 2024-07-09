import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav-menu">
                <li className="nav-item">
                    <a className="nav-link active" href="index.html">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Proveedores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Publicaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Iniciá sesión</a>
                </li>
                <li className="nav-item">
                    <p>¿Querés formar parte de la Red de impacto ECO como Proveedor?</p>
                    <a className="nav-link" href="#">Registrate</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
