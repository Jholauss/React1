import React from "react";
import image from "./assets/Hoodie-1.jpg";
import{useCard} from "./Hooks/useCard";

export const Itemcount = ({stock,name}) => {

    const {count,amount} =useCard(stock);

    return (
        <div style={styles.landing}>
            <h3 style={styles.h3}>{name}</h3>
            <img style={styles.image} src={image} alt="Hoodie"/>
            <h4>Precio:S/<span>100</span></h4>
            <div>
            <button style={styles.button} onClick={()=>count(+1)}>+</button>
            <span>{amount}|{stock}</span>
            <button style={styles.button} onClick={()=>count(-1)}>-</button>
            </div>
        </div>
    );
}

export default Itemcount;

const styles = {
    landing: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        backgroundColor: '#2c3e50',
        color:'#fff',
        padding: '2rem',
        textAlaing:'center',
    },
    h3:{
        color:'#fff',
        fontSize:'1.3rem',
        marginBottom:'1rem',
        textTransform:'uppercase',
    },
    image:{
        width: '20%',
    },
    contador:{
        display:"d-flex",
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop:'1rem',
        letterSpacing:'20px',
    },
    button:{
        backgroundColor: '#2c3e50',
        border: '1px solid #fff ',
        color:'#fff',
        textAlign: 'center',
        padding: '0.5rem',
        margin: '0.5rem',
        width: '4rem',
        borderRadius: '5px',
        cursor: 'pointer',

    }
}