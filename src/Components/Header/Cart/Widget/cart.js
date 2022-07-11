import React, { useContext } from "react";
import shopping_cart from "../../Cart/Widget/shopping-cart-1.png";
import { CartContext } from "../../../Context/CartContext";
const CartWidget = () => {
    const {qtyProducts} = useContext(CartContext);
    return (
        <>
        <button style={styles.button}>
            <img style={styles.image} src={shopping_cart} alt="cart icon" />
        </button>
        <span style={styles.span}>{qtyProducts}</span>
        </>
    );
};
const styles = {
    button:{
        background: "transparent",
        color:"inherit",
        border: "none",
        cursor: "pointer",
        outline:"inherit",
        width:"1.5rem",
        height:"1.5rem",
        marginRight:"50px",
    },
    image:{
        width:"1.5rem",
        
        height:"1.5rem",
    },
    span:{
        fontSize:"1rem",
        color:"#fff",
        marginLeft:"10px",
        marginTop:"1rem",
        fontWeight:"bold",
        position:"relative",
        top:"-30px",
        right:"70px",
        borderRadius:"50%",
        padding:"0.5rem",
       
        textAlign:"center",
        display:"inline-block",
        width:"1.5rem",
        height:"1.5rem",
        lineHeight:"1.5rem",
        verticalAlign:"middle",
        marginRight:"10px",
    },
};
export default CartWidget;