import React from "react";
import logo from "../../assets/Logo_Invertido.png";
import CartWidget from "./Cart/Widget/cart";

const menuItems = [
    {
        id:1,
        name: "Home",
    },
    {
        id:2,
        name: "Products",
    },
    {
        id:3,
        name: "Info",
    }
];

const Header = () => {
    return(
        <div className="nav" style={styles.container}>
        <a href="/">
        <img style={styles.logo} src={logo} alt="" /></a>
        <div>
        {menuItems.map((item) => (
            <a href="/" style={styles.anchors} className="nav-items" key={item.id}>
            {item.name}
            </a>  
        ))}
        <img src="" alt="" />
        </div>
        <CartWidget/>
        </div>
        
    );
};
const styles={
    container:{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,    
        zIndex: "1",
        boxSizing: "border-box",
        fontFamily: "Roboto, sans-serif",
        fontSize: "20px",
        letterSpacing: "1px",
        alignItems: "center",

    },
    anchors:{
        textDecoration: "none",
        color: "#f5f5f5",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "0.5rem",
        margin: "0.5rem",
    },
    logo:{
        width: "15%",
        margin: "0.5rem",
    }
}


export default Header