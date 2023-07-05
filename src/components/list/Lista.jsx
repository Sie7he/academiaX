import React, { useContext } from 'react'
import Meta from './Meta'
import { Contexto } from '../../services/Memory'



function Lista() {
    const metas = useContext(Contexto)
    return (
        metas.map(meta => <Meta key={meta.id} {...meta} />)
    )
}

export default Lista