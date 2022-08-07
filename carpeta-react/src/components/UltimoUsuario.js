import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ApiSettings from '../ApiSettings.json';

function UltimoUsuario() {

    const [ultimoUsuario, setUltimoUsuario] = useState({});
    useEffect(() => {
        fetch(ApiSettings.BaseApi+'/api/usuarios')
          .then(response => response.json())
          .then(data => {let user = data.users.slice(-1)[0]; setUltimoUsuario(user)})
      }, [])

    return (
      <div id='container-ultimo-usuario'>
          <h4>Último usuario agregado a la base de datos</h4>
          <div>
              <h3>Nombre: {ultimoUsuario.name}</h3>
              <p>Email: {ultimoUsuario.email}</p>
              <Link to={`/usuarios/${ultimoUsuario.id}`}>Ver detalle de usuario</Link>
          </div>
      </div>
    )
  }
  
  export default UltimoUsuario; 