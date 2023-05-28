import React from 'react';
import estilos from './Header.module.css';
import logo from '../../assets/logo.svg'; 
import { ReactComponent as PerfilSVG }  from '../../assets/perfil.svg';
import Vinculo from './Vinculo';

function Header() {
    return (
    <header className={estilos.encabezado}>
            <div className={estilos.contenedor}>
                <img src={logo} className={estilos.logo }/>
                <a href='/' className={estilos.titulo}>Metas App</a>
            </div>
            <nav>
            <Vinculo
                to='/perfil' 
                Icono={ PerfilSVG } 
            />
            </nav>
        </header>
    )
}

export default Header