import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ApiSettings from '../ApiSettings.json';

function ProductosList(props) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(ApiSettings.BaseApi+'/api/productos')
      .then(response => response.json())
      .then(data => {setProductos(data.data)})
  }, [])

  let arrFiltrado = [];
  productos.forEach(producto => {
    if(producto.category == props.categoria){
      arrFiltrado.push(producto)
    }
  })

  if(props.categoria != undefined){
    return (
      <div id='container-product-list'>
          <h1>Listado de productos</h1>
          <div id='container-ul-product-list'>
            <ul>
              {arrFiltrado.map((producto, i) => {
                return <li key={producto + '_' + i}>
                  <div id='container-li-product-list'>
                    <p><strong>id:</strong> {producto.id}</p>
                    <hr className='hr-product-list'/>
                    <p><strong>Nombre:</strong>{` ${producto.name}`}</p>
                    <hr className='hr-product-list'/>
                    <p>Precio: {`$ ${producto.price}`}</p>
                    <hr className='hr-product-list'/>
                    <Link to={`/productos/${producto.id}`}>Detalle</Link>
                  </div>
                </li>
              })}
            </ul>
          </div>
      </div>
    )
  } else {
    return (
      <div id='container-product-list'>
          <h1>Listado de productos</h1>
          <div id='container-ul-product-list'>
            <ul>
              {productos.map((producto, i) => {
                return <li key={producto + '_' + i}>
                  <div id='container-li-product-list'>
                    <p><strong>id:</strong> {producto.id}</p>
                    <hr className='hr-product-list'/>
                    <p><strong>Nombre:</strong>{` ${producto.name}`}</p>
                    <hr className='hr-product-list'/>
                    <p>Precio: {`$ ${producto.price}`}</p>
                    <hr className='hr-product-list'/>
                    <Link to={`/productos/${producto.id}`}>Detalle</Link>
                  </div>
                </li>
              })}
            </ul>
          </div>
      </div>
    )
  }
  }
  
export default ProductosList; 