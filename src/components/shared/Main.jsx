import React from 'react';
import estilos from './Main.module.css';
import Vinculo from './Vinculo';
import {ReactComponent as ListaSVG} from '../../assets/lista.svg';
import {ReactComponent as NuevaSVG} from '../../assets/nueva.svg';

function Main({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo
          to='/lista' 
          texto="Lista de Metas" 
          Icono={ListaSVG}
        />
         
        <Vinculo
          to='/nueva' 
          texto="Nueva Meta"
          Icono={ NuevaSVG } 
        />
       
      </aside>
      <main className={estilos.main}>
        {children}
      </main>
    </div>
  )
}

export default Main