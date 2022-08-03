import React from 'react';
import {Link} from 'react-router-dom';
import ImagenLogo from '../logo-tododeportes.png';
import NavBarLateral from './NavBarLateral';

function BarraLateral() {

    return (
      <div id='div-barra-lateral'>
          <div className='div-separador-barra-lateral'>
            <img className='barra-lateral-logo' src={ImagenLogo} alt="logito" />
          </div>
          <hr className='hr-general'/>
          <div className='div-separador-barra-lateral'>
              <Link className='dashboard-a' to='/'>Dashboard</Link>
          </div>
          <hr className='hr-general'/>
          <div>
              <NavBarLateral/>
          </div>
      </div>
    )
  }
  
  export default BarraLateral; 