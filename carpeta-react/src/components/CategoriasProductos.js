import React from 'react';
import { Link} from 'react-router-dom'

function CategoriasProductos() {

    return (
    <div id='div-categoriasProductos-container'>
        <h3>Todas las categorias de productos</h3>
        <div id='div-categoriasProductos'>
            <div className='container-link-categorias'>
                <Link to='/categorias/hombres'>Hombres</Link>
            </div>
            <hr/>
            <div className='container-link-categorias'>
                <Link to='/categorias/mujeres'>Mujeres</Link>
            </div>
            <hr/>
            <div className='container-link-categorias'>
                <Link to='/categorias/infantil'>Infantil</Link>
            </div>
        </div>
    </div>
    )
  }
  
  export default CategoriasProductos; 