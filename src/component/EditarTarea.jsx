import React from 'react'

const editarTarea = ({tarea,conseguirListado,setEditar,setListadoState}) => {
  const titulo_componente = "Editar tarea: ";
   const guardarEdicion = (e,id) =>{
    e.preventDefault();
    
    let target = e.target;
    const tareasEnLista = conseguirListado();
    const indice = tareasEnLista.findIndex(tarea => tarea.id === id);
    let nuevatarea = {
        id,
        titulo:target.tarea_editar.value
    }
    
    tareasEnLista[indice] = nuevatarea;
    console.log(tareasEnLista);

    localStorage.setItem('tarea',JSON.stringify(tareasEnLista));

    setListadoState(tareasEnLista);
    setEditar(0);
    
   }
  return (
    <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
        <h6 className='text-center'>{titulo_componente}{tarea.titulo}</h6>
        <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={e =>guardarEdicion(e,tarea.id)}>
            <input 
            type="text"
            name="tarea_editar"
            id='tarea_editar'
            defaultValue={tarea.titulo}    
            />
            <button className='bg-white m-2'>Actualizar tarea</button>
        </form>
    </div>
  )
}

export default editarTarea