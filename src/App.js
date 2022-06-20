import React from "react";
import ItemListContainer from "./Components/Header/ItemListContainer/itemList";
import Header from "./Components/Header/Header";
const App=()=>{
  return(
    <div className="App">
      <Header/>
      <ItemListContainer greeting={"Welcome to luminotec"}/>
    </div>
  )
}
export default App