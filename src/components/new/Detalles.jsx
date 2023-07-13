import React, { useContext, useEffect, useState } from 'react'
import estilos from './Details.module.css';
import { Contexto } from '../../services/Memory';
import { useNavigate, useParams } from 'react-router-dom';
import { actualizarMeta, borrarMeta } from '../../services/Requests';


function Detalles() {

    const { id } = useParams();


    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃',
        meta: 52,
        plazo: '2022-01-01',
        completado: 0,
    });

    const [estado, dispatch] = useContext(Contexto);

    const { detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop) => {
        setForm(estado =>({...estado, [prop] : event.target.value}))
        
    }

    const navegar = useNavigate();
    
    const metaMemoria = estado.objetos[id];
    useEffect(() => {
        if( !id ) return;

        if (!metaMemoria) {
            return navegar('/lista');
        }
        setForm(metaMemoria);
    }, [id, metaMemoria, navegar])
    
    const crear = async () => {
        const nuevaMeta = await crearMeta();
        dispatch({ tipo: 'crear', meta: nuevaMeta});
        navegar('/lista');
    }


    const actualizar = async () => {
        const metaActualizada = await actualizarMeta();
        dispatch({ tipo: 'actualizar', meta: metaActualizada});
        navegar('/lista');
    }
    const borrar =  async () => {
        const idBorrada = await borrarMeta();
        dispatch({ tipo: 'borrar', id: idBorrada});
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');
    }


    const frecuencia = ["dia", "semana", "mes", "año"];
    const iconos = ["🏃", "📚", "✈️"]
    return (
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu meta
                    <input 
                        type='text' 
                        className='input'
                        placeholder='(ej. 1 vez al dia)'
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                        
                    />
                </label>
                <label className='label'>
                    ¿Con que frecuencia deseas cumplitr tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className='flex mb-6'>
                        <input 
                            type='number' 
                            className='input mr-6'
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')}
                         />
                        <select 
                            className='input'
                            value={periodo}
                            onChange={e => onChange(e, 'periodo')}
                        >
                            {frecuencia.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}

                        </select>
                    </div>
                </label>
                <label className='label'>
                    ¿Cuantas veces deseas completar esta meta?
                    <input 
                        type='number' 
                        className='input' 
                        value={meta}
                        onChange={e => onChange(e, 'meta')}
                    />
                </label>
                <label className='label'>
                    ¿Tienes una fecha límite?
                    <input 
                        type='date' 
                        className='input' 
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')}
                    />
                </label>
                <label className='label'>
                    ¿Cuantas veces has completado ya esta meta?
                    <input 
                        type='number' 
                        className='input'
                        value={completado} 
                        onChange={e => onChange(e, 'completado')}
                    />
                </label>
                <label className='label'>
                    Escoge el icono para la meta
                    <select 
                        className='input'
                        value={icono}
                        onChange={e => onChange(e, 'icono')}
                    >
                        {iconos.map(icono => <option key={icono} value={icono}>{icono}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.buttons}>
               {!id && <button 
                    className='button button--black' 
                    onClick={crear}
                >
                    Crear
                </button>}
                {id && <button 
                    className='button button--black' 
                    onClick={actualizar}
                >
                    Actualizar
                </button>}
                {id && <button 
                    className='button button--red' 
                    onClick={borrar}
                >
                    Borrar
                </button>}
                <button
                    className='button button--gray'
                    onClick={cancelar}
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default Detalles