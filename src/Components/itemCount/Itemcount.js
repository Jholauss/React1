import React, { useState,useEffect } from "react";
export const Itemcount = ({initial,stock,onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    const decrease =()=>{
        setCount(count-1);
    }
    const increase =()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        setCount(parseInt(initial));
    },[initial])
    return (
        <div style={styles.contador}>
            <button style={styles.button} disabled={count<=1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button style={styles.button} disabled={count>=stock} onClick={increase}>+</button>
            <div>
                <button style={styles.buttonAgregar} disabled={stock<=0} onClick={()=>onAdd(count)}>Agregar al carro</button>
            </div>
        </div>
    );
}
export default Itemcount;

const styles = {
  contador: {
    display: "d-flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    letterSpacing: "3px",
    margin:"0 auto",
  },
  button: {
    backgroundColor: "#2c3e50",
    border: "1px solid #fff ",
    color: "#fff",
    textAlign: "center",
    padding: "0.5rem",
    margin: "0.5rem",
    width: "4rem",
    borderRadius: "5px",
    cursor: "pointer"
  },
  buttonAgregar:{
    backgroundColor: "#2c3e50",
    border: "1px solid #fff ",
    color: "#fff",
    textAlign: "center",
    padding: "0.5rem",
    margin: "0.5rem",
    width: "10rem",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
