import React, { useEffect, useState } from 'react';
import { ImPencil2 } from "react-icons/im";
import { ImBin } from "react-icons/im";
import styles from "../css/listado.module.css";
import EditarTarea from './editarTarea';

const ListadoTareas = ({listadoState,setListadoState}) => {
    const [editar,setEditar] = useState(0);
    
    useEffect (()=>{

        console.log("componente de listado de tareas cargado");
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
        console.log(listaDeTareas,nuevoArrayTareas);

        setListadoState(nuevoArrayTareas);

        localStorage.setItem('tarea',JSON.stringify(nuevoArrayTareas));
    };

  return (
        <>
            {
            listadoState !=null ?
                        listadoState.map(tarea => {
                            return(
                                <article key={tarea.id} className='w-100 d-flex flex-column justify-content-center align-items-center'>
                                    <div className='d-flex justify-content-between align-items-center w-100 border-bottom shadow mb-2 p-2'>
                                        <p className='m-0'>
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