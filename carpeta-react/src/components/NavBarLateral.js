import React from 'react';
import EnlaceNavBarLateral from './EnlaceNavBarLateral';

function NavBarLateral() {

    return (
      <div id='div-container-enlaces-navbar'>
          <div className='container-enlace-navBar'>
            <EnlaceNavBarLateral name='Productos'/>
          </div>
          <div className='container-enlace-navBar'>
            <EnlaceNavBarLateral name='Usuarios'/>
          </div>
          <div className='container-enlace-navBar'>
            <EnlaceNavBarLateral name='Categorias'/>
          </div>
      </div>
    )
  }
  
  export default NavBarLateral; 