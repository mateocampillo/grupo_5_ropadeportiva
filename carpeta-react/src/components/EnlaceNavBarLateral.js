import React from 'react';
import {Link} from 'react-router-dom';

function EnlaceNavBarLateral(props) {

    return (
      <div>
          <Link className='dashboard-a' to={`${props.name.toLowerCase()}`}>{props.name}</Link>
      </div>
    )
  }
  
  export default EnlaceNavBarLateral; 