import React from 'react';
import McDivTarjetasInicio from './McDivTarjetasInicio';
import UltimoProducto from './UltimoProducto';
import UltimoUsuario from './UltimoUsuario';

function MainContainer() {

    return (
      <div id='div-main-container'>
          <h1>Todo Deportes Dashboard</h1>
          <hr className='hr-general'/>
          <div>
            <McDivTarjetasInicio/>
          </div>
          <div id='div-container-bottomRow'>
            <UltimoProducto />
            <UltimoUsuario />
          </div>
      </div>
    )
  }
  
  export default MainContainer; 