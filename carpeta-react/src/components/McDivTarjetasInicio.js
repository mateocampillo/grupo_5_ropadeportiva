import React, {useEffect, useState} from 'react';
import ApiSettings from '../ApiSettings.json';
import SubtarjetasInicio from './SubtarjetasInicio';

function McDivTarjetas() {

  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [cantidadUsuarios, setCantidadUsuarios] = useState(0);
  const [activoEnProductos, setActivoEnProductos] = useState(0);

  useEffect(() => {
    fetch(ApiSettings.BaseApi+'/api/productos')
      .then(response => response.json())
      .then(data => {
        setCantidadProductos(data.total);
        let contadorActivo = 0;
        data.data.forEach(producto => {
          contadorActivo = contadorActivo + producto.price
        }); 
        setActivoEnProductos(contadorActivo)})
  }, [])

  useEffect(() => {
    fetch(ApiSettings.BaseApi+'/api/usuarios')
      .then(response => response.json())
      .then(data => {setCantidadUsuarios(data.count)})
  }, [])

    return (
      <div id='mc-div-container-tarjetas'>
        <SubtarjetasInicio text='Productos en la DB' data={cantidadProductos} border='5px solid #ce7438'/>
        <SubtarjetasInicio text='Activo en productos' data={'$ '+activoEnProductos} border='5px solid rgb(59, 33, 202)'/>
        <SubtarjetasInicio text='Usuarios en la DB' data={cantidadUsuarios} border='5px solid #1dce99'/>
      </div>
    )
  }
  
  export default McDivTarjetas; 