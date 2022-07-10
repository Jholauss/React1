import React from "react";
export const Itemcount = ({stock,onAdd,count,setCount}) => {
    const decrease =()=>{
        if(count>1){
            setCount(count-1);
        }
    }
    const increase =()=>{
      if(count<stock){
        setCount(count+1);
      }
    }
    return (
        <div style={styles.contador}>
            <button className="btn btn-danger w-20" onClick={decrease}>-</button>
            <span className="mx-2">{count}</span>
            <button className="btn btn-primary w-20" onClick={increase}>+</button>
            <div>
                <button className="btn btn-success fw-bold" style={styles.buttonAgregar} disabled={stock<=0} onClick={onAdd}>Agregar al carro</button>
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
  buttonAgregar:{
    color: "#fff",
    textAlign: "center",
    padding: "0.5rem",
    margin: "0.5rem",
    width: "10rem",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
