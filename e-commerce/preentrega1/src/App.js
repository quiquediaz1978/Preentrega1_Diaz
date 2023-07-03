import './App.css';
import Barra from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
   <Barra/>
   <ItemListContainer greeting="Aca van los productos"/>
   
    </div>
  );
}

export default App;
