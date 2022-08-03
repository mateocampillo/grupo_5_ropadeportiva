import React, {useEffect, useState} from 'react';
import ApiSettings from '../../ApiSettings.json';

function ApiProductos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch(ApiSettings.BaseApi+'/api/productos')
        .then(response => response.json())
        .then(data => {setProductos(data.data)})
    }, [])

    return (
      <div>
          {productos === null ? (<p>Cargando</p>):productos.map((producto, i) => {
            return (
              <div key={producto.name+'_'+i}>
                <p>{producto.name}</p>
              </div>
              )
          })}
      </div>
    )
  }
  
  export default ApiProductos; 