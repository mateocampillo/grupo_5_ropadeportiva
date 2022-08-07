import React from 'react';
import EnlaceCategorias from './EnlaceCategorias';
import ProductosList from './ProductosList';

function CategoriasList(props) {

    return (
    <div id='container-categorias-list'>
        <EnlaceCategorias />
        <ProductosList categoria={props.cat} />
    </div>
    )
  }
  
  export default CategoriasList; 