import React, { useState, useEffect } from 'react';
import ApiSettings from '../ApiSettings.json';
import { useParams } from 'react-router-dom';

function ProductDetail() {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      fetch(ApiSettings.BaseApi+`/api/productos/${id}`)
        .then(response => response.json())
        .then(data => {setProducto(data.data)})
    }, [])

    return (
      <div id='container-product-user-detail'>
        <h2>Detalle del producto</h2>
        <div id='div-product-user-detail'>
            <h3>ID: {producto.id}</h3>
            <hr className='hr-detail'/>
            <h3>Nombre: {producto.name}</h3>
            <hr className='hr-detail'/>
            <p className='product-user-detail-descripcion'><strong>Descripcion:</strong> {producto.descripcion}</p>
            <hr className='hr-detail'/>
            <p><strong>Categoria:</strong> {producto.category}</p>
            <hr className='hr-detail'/>
            <p><strong>Precio:</strong> ${producto.price}</p>
            <hr className='hr-detail'/>
            <p><strong>Tipo:</strong> {producto.type}</p>
            <hr className='hr-detail'/>
            <p><strong>Talle:</strong> {producto.size}</p>
            <hr className='hr-detail'/>
            <p><strong>Cadera:</strong> {producto.waist}</p>
            <hr className='hr-detail'/>
            <p><strong>Pecho:</strong> {producto.chest}</p>
            <hr className='hr-detail'/>
            <p><strong>Espalda:</strong> {producto.back}</p>
            <hr className='hr-detail'/>
            <p><strong>Altura:</strong> {producto.height}</p>
            <hr className='hr-detail'/>
            <p><strong>Tela:</strong> {producto.cloth}</p>
            <hr className='hr-detail'/>
            <p><strong>Color:</strong> {producto.color}</p>
            <hr className='hr-detail'/>
            <p><strong>Codigo:</strong> {producto.code}</p>
            <hr className='hr-detail'/>
        </div>
      </div>
    )
  } 
  
export default ProductDetail; 