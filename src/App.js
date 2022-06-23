import React from "react";
import ItemListContainer from "./ItemListContainer/itemList";
import Header from "./Components/Header/Header";
import Itemcount from"./Itemcount";

export default function App() {
const onAdd=()=>{
  console.log("add");
}
  return(
    <div className="App">
      <Header/>
      <ItemListContainer greeting={"Welcome"}/>
      <div>
        <div>         
        <Itemcount stock={10} initial={1} onAdd={onAdd} name="Hoodie"/>
        </div>
      </div>
      </div>
  );
}

