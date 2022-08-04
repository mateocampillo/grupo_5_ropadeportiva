import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ApiSettings from '../ApiSettings.json';

function UltimoProducto() {

    const [ultimoProducto, setUltimoProducto] = useState({});
    useEffect(() => {
        fetch(ApiSettings.BaseApi+'/api/productos')
          .then(response => response.json())
          .then(data => {let product = data.data.slice(-1)[0]; setUltimoProducto(product)})
      }, [])

    return (
      <div id='container-ultimo-producto'>
          <h4>Último producto agregado a la base de datos</h4>
          <div>
              <h3>{ultimoProducto.name}</h3>
              <p>{ultimoProducto.descripcion}</p>
              <Link to={`/`}>Ver detalle de producto</Link>
          </div>
      </div>
    )
  }
  
  export default UltimoProducto; 