import './App.css';
import freecodeCampLogo from './imagenes/descarga.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    console.log("reiniciar");
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>

      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton 
          texto='reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
