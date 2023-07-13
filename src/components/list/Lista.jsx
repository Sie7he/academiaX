import React, { useContext, useEffect } from 'react'
import Meta from './Meta'
import { Contexto } from '../../services/Memory'
import { Outlet } from 'react-router';
import { pedirMetas } from '../../services/Requests';



function Lista() {
  const [estado] = useContext(Contexto);



    
    return (
        <>
      {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]} />)}
      <Outlet />
        </>
    )
}

export default Lista