import React, { useEffect, useState } from 'react'
import estilos from './Details.module.css';

function Detalles() {

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃',
        meta: 52,
        plazo: '2022-01-01',
        completado: 0,
    });

    const { detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop) => {
        setForm(estado =>({...estado, [prop] : event.target.value}))
        
    }
    
    useEffect(() => {
        console.log(form);
    }, [form])
    
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
                            {frecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}

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
                        {iconos.map(icono => <option value={icono}>{icono}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.buttons}>
                <button className='button button--black'>Crear</button>
                <button className='button button--gray'>Cancelar</button>
            </div>
        </div>
    )
}

export default Detalles