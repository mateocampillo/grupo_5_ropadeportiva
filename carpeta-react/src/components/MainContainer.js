import React from 'react';
import McDivTarjetasInicio from './McDivTarjetasInicio';

function MainContainer() {

    return (
      <div id='div-main-container'>
          <h1>Todo Deportes Dashboard</h1>
          <hr className='hr-general'/>
          <div>
            <McDivTarjetasInicio/>
          </div>
      </div>
    )
  }
  
  export default MainContainer; 