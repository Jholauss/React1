import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
// import ItemCount from './Components/itemCount/Itemcount';

function App() {
  const greeting= "Welcome to goods";
  // const onAdd = (quantity) => {
  //   console.log(`Compraste ${quantity} unidades`);
  // };
  return (
    <div className="App">
        <Header/>
        <ItemListContainer greeting={greeting}/>
    </div>
  );
}

export default App;


