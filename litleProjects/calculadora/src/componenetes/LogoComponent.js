import React from "react";
import '../hojas-de-estilo/Logo.css';

function LogoComponent(props){
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img 
        className='freecodecamp-logo'
        src={props.source}
        alt='Logo de freecodecamp' />
    </div>
  );
}

export default LogoComponent;