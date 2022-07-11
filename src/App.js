import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Carrito from './Pages/Carrito';
import CartCustomProvider from './Components/Context/CartContext';

export const greeting= "Welcome to goods";

function App() {
  return (
    <BrowserRouter>
    <CartCustomProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Productos' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/Categoria/:tipocategoria' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/About' element={<AboutUs/>}/>
          <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Carrito' element={<Carrito/>}/>
          </Routes>
    </CartCustomProvider>
    </BrowserRouter>
 
  );
}

export default App;


