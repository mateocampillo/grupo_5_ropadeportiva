import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ApiSettings from '../ApiSettings.json';

function UsuariosList() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(ApiSettings.BaseApi+'/api/usuarios')
      .then(response => response.json())
      .then(data => {setUsuarios(data.users)})
  }, [])

    return (
      <div id='container-product-list'>
          <h1>Listado de Usuarios</h1>
          <div id='container-ul-product-list'>
            <ul>
              {usuarios.map((usuario, i) => {
                return <li key={usuario + '_' + i}>
                  <div id='container-li-product-list'>
                    <p><strong>id:</strong> {usuario.id}</p>
                    <hr className='hr-product-list'/>
                    <p><strong>Nombre:</strong>{` ${usuario.name}`}</p>
                    <hr className='hr-product-list'/>
                    <p>Email: {usuario.email}</p>
                    <hr className='hr-product-list'/>
                    <Link to={`/usuarios/${usuario.id}`}>Detalle</Link>
                  </div>
                </li>
              })}
            </ul>
          </div>
      </div>
    )
  }
  
export default UsuariosList; 