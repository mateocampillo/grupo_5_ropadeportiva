import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ApiSettings from '../ApiSettings.json';

function VentasList() {

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        fetch(ApiSettings.BaseApi+'/api/main/ventas')
          .then(response => response.json())
          .then(data => {setVentas(data.data)})
      }, [])
    
    return (
      <div id='container-ventas-list'>
        <h3>Listado de ventas</h3>
        <div id='container-ventas-list-ul'>
            {ventas.map((venta, i) => {
                let fecha = venta.fecha_compra.split('T');
                let productos = venta.id_productos.split(',');
                return <li key={venta + '_' + i}>
                    <div id='container-ventas-list-li'>
                        <h4><strong>ID de venta:</strong> {venta.id}</h4>
                        <p><strong>ID usuario:</strong> <Link to={`/usuarios/${venta.id_cliente}`}>{venta.id_cliente}</Link></p>
                        <p><strong>Total:</strong> $ {venta.total}</p>
                        <p><strong>ID de productos:</strong>
                        <div id='ventas-div-productos'>
                                {productos.map((producto, i) => {
                                    return <li key={producto + '_' + i}>
                                    <Link to={`/productos/${producto}`}>{producto}</Link>
                                </li>
                            })}
                        </div>
                        </p>
                        <p><strong>Fecha:</strong> {fecha[0]}</p>
                    </div>
                    <hr className='hr-detail'/>
                </li>
            })}
        </div>
      </div>
    )
  }
  
  export default VentasList; 