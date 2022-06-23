import React from "react";
import ItemListContainer from "./ItemListContainer/itemList";
import Header from "./Components/Header/Header";
import Itemcount from"./Itemcount";
const App=()=>{
  return(
    <div className="App">
      <Header/>
      <ItemListContainer greeting={"Welcome"}/>
      <div>
        <div>         
        <Itemcount stock={10} name="Hoodie"/>
        </div>
      </div>
      </div>
  )
}
export default App