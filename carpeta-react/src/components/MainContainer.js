import React from 'react';
import McDivTarjetasInicio from './McDivTarjetasInicio';
import UltimoProducto from './UltimoProducto';
import UltimoUsuario from './UltimoUsuario';
import CategoriasProductos from './CategoriasProductos';
import Footer from './Footer';

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
          <CategoriasProductos />
          <Footer />
      </div>
    )
  }
  
  export default MainContainer; 