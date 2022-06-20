import React from "react";

import shopping_cart from "../../Cart/Widget/shopping-cart-1.png";


const CartWidget = () => {
    return (
        <button style={styles.button}>
            <img style={styles.image} src={shopping_cart} alt="cart icon" />
        </button>
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
    }
};
export default CartWidget;