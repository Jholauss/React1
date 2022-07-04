import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const greeting= "Welcome to goods";
  return (
    <BrowserRouter>
        <Header/>
        <ItemListContainer greeting={greeting}/>
        <ItemDetailContainer/>
    </BrowserRouter>
 
  );
}

export default App;


