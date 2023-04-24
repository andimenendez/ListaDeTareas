import React, { useEffect, useState } from 'react';
import { ImPencil2 } from "react-icons/im";
import { ImBin } from "react-icons/im";
import styles from "../css/listado.module.css";
import EditarTarea from './editarTarea';

const ListadoTareas = ({listadoState,setListadoState}) => {
    const [editar,setEditar] = useState(0);
    
    
    useEffect (()=>{

        
        conseguirListado();

    },[])
   
    const conseguirListado = () =>{

        let tareas = JSON.parse(localStorage.getItem("tarea"));
        setListadoState(tareas);
        return tareas;
    }

    const BorrarTarea = (id) => {
        let listaDeTareas = conseguirListado();

        let nuevoArrayTareas = listaDeTareas.filter(tarea => tarea.id !== parseInt(id))
        setListadoState(nuevoArrayTareas);

        localStorage.setItem('tarea',JSON.stringify(nuevoArrayTareas));
    };
    const tareaCompleta = (id) =>{
        const newArray = conseguirListado();
        let tarea = newArray.find((completo)=> completo.id === id);
        tarea.completada = !tarea.completada;
        localStorage.setItem('tarea',JSON.stringify(newArray));
        setListadoState(newArray);
    }

  return (
    <>
    {
    listadoState !=null ?
                listadoState.map(tarea => {
                    return(
                        <article key={tarea.id} className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <div className='d-flex justify-content-between align-items-center w-100 border-bottom shadow mb-2 p-2'>
                                <input type="checkbox" checked={tarea.completada} 
                                onChange={()=>{
                                tareaCompleta(tarea.id);
                                }} 
                                />
                                <p className={`m-0 ${tarea.completada ? styles.tachado : null}`}>
                                    {tarea.titulo}
                                </p>
                                <div>
                                    <button className={styles.button} onClick={()=>setEditar(tarea.id)}>
                                        <ImPencil2/>
                                    </button>
                                    <button onClick={()=>{BorrarTarea(tarea.id)}}className={styles.button}>
                                        <ImBin/>
                                    </button> 
                                </div>
                            </div>
                            
                                    {editar === tarea.id &&(<EditarTarea tarea={tarea} conseguirListado={conseguirListado}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                    />)}

                            
                                                           
                            
                        </article>
                    );  
                })
            : 
                <h2>
                    No hay tareas para realizar
                </h2>
    }
</>
);
};

export default ListadoTareas;