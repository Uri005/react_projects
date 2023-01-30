import './App.css';
import freeCodeCampLogo from './imagenes/descarga.jpg';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freeCodeCamp-logo'
          src={freeCodeCampLogo}
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
