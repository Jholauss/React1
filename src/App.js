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
import Error404 from './Pages/Error404';
import CartProvider from './Components/Context/CartContext';
import CheckOut from './Pages/CheckOut';

export const greeting= "Welcome to goods";
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Productos' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/Categoria/:tipocategoria' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/About' element={<AboutUs/>}/>
          <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Carrito' element={<Carrito/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={<Error404/>}/>
          </Routes>
        
    </CartProvider>
    </BrowserRouter>
    
 
  );
}

export default App;


