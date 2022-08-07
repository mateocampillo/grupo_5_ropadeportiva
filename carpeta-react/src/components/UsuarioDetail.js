import React, { useState, useEffect } from 'react';
import ApiSettings from '../ApiSettings.json';
import { useParams } from 'react-router-dom';
import UsuariosList from './UsuariosList';

function UsuarioDetail() {

    const [usuario, setUsuario] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      fetch(ApiSettings.BaseApi+`/api/usuarios/${id}`)
        .then(response => response.json())
        .then(data => {setUsuario(data.user)})
    }, [])

    return (
      <div id='container-product-user-detail'>
        <h2>Detalle del usuario</h2>
        <div id='div-product-user-detail'>
            <h3>ID: {id}</h3>
            <hr className='hr-detail'/>
            <h3>Nombre: {usuario.name}</h3>
            <hr className='hr-detail'/>
            <p><strong>Apellido:</strong> {usuario.surname}</p>
            <hr className='hr-detail'/>
            <p><strong>Email:</strong> {usuario.email}</p>
            <hr className='hr-detail'/>
            <p><strong>Nacimiento:</strong> {usuario.birthday}</p>
            <hr className='hr-detail'/>
            <p><strong>Provincia:</strong> {usuario.provincia}</p>
            <hr className='hr-detail'/>
            <p><strong>Newsletter:</strong> {`${usuario.newsletter}`}</p>
            <hr className='hr-detail'/>
            <p><strong>Sexo:</strong> {usuario.sex}</p>
            <hr className='hr-detail'/>
        </div>
      </div>
    )
  } 
  
export default UsuarioDetail; 