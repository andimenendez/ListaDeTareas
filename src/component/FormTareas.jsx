import React, { useState } from 'react';
import styles from '../css/formTareas.module.css'
import { ImPlus } from 'react-icons/im';
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

const FormTareas = ({setListadoState}) => {
  
    const tituloComponente = "Lista de tareas";
    const [tareaState,setTareaState]= useState({
        titulo: ''
    });
    const {titulo} = tareaState;
    const conseguirDatos = (e) =>{
       e.preventDefault();

       let target = e.target
       let titulo = target.titulo.value;
       let tareas = {
        id:new Date().getTime(),
        titulo
       };
       
       setTareaState(tareas);
       setListadoState(elementos =>{
        return [...elementos,tareas];
       });
       guardarEnStorage("tarea",tareas);
       
    }



  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center mt-5'>
        <h3>{tituloComponente}</h3>
        <strong>
            { titulo   && "Has añadido: " +titulo}
        </strong>
        
    
        <form onSubmit={conseguirDatos} className='mt-4 d-flex justify-content-center align-items-center w-100'>
            <input type="text" id='titulo' name='titulo' placeholder='Tarea a Realizar' className='me-2 col-9 border-2 border-dark'/>
            <button className={styles.button}><ImPlus/></button>
        </form>
    </div>
  )
}

export default FormTareas;