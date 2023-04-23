import React, { useState } from 'react';
import ListadoTareas from '../component/listadoTareas';
import FormTareas from '../component/FormTareas';

const Home = () => {
  const [listadoState,setListadoState] = useState([]);
  return (
    <>
    <div className='vh-100 container'>
        <div className='row container'>
            <div>
              <div className='col-12 d-flex justify-content-center align-items-center'>
                  <FormTareas setListadoState={setListadoState}/>
              </div>
              <div className='col-12 d-flex flex-column justify-content-center align-items-center mt-5'>
                  <ListadoTareas listadoState={listadoState} setListadoState={setListadoState}/>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home;