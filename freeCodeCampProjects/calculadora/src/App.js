import './App.css';
import freeCodeCampLogo from './imagenes/descarga.jpg'
import Boton from './componenetes/Boton';
import Pantalla from './componenetes/Pantalla';
import BotonClear from './componenetes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Debe seleccionar un numero antes de realizar una operacion");
    }
    
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className='freecodecamp-logo-contenedor'>
      <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freecodecamp' />
    </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClick={addInput}>1</Boton>
            <Boton manejarClick={addInput}>2</Boton>
            <Boton manejarClick={addInput}>3</Boton>
            <Boton manejarClick={addInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={addInput}>4</Boton>
            <Boton manejarClick={addInput}>5</Boton>
            <Boton manejarClick={addInput}>6</Boton>
            <Boton manejarClick={addInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={addInput}>7</Boton>
            <Boton manejarClick={addInput}>8</Boton>
            <Boton manejarClick={addInput}>9</Boton>
            <Boton manejarClick={addInput}>*</Boton>
          </div>
            
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={addInput}>0</Boton>
            <Boton manejarClick={addInput}>.</Boton>
            <Boton manejarClick={addInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
