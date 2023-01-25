import './App.css';
import freeCodeCampLogo from './imagenes/descarga.jpg'
import Boton from './componenetes/Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            src={freeCodeCampLogo}
            className='freecodecamp-logo'
            alt='Logo de freecodecamp' />
        </div>

        <div className='contenedor-calculadora'>
          <div className='fila'>
            <Boton>1</Boton>
          </div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
