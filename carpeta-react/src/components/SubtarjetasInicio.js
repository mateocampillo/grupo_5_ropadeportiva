import React from 'react';

function SubtarjetasInicio(props) {

    return (
      <div className='div-subtarjetas' style={{borderLeft: props.border}}>
          <p>{props.text}</p>
          <p>{props.data}</p>
      </div>
    )
  }
  
  export default SubtarjetasInicio; 