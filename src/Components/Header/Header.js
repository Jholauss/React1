import React from "react";
import logo from "../../assets/LogoLumi.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";

const Header =()=>{
    return (
        <header style={styles.container}>
        <img style={styles.imagen} src={logo} alt="" />
        <nav style={styles.navBar}>
            <a style={styles.anchors} href="">Inicio</a>
            <a style={styles.anchors} href="">Productos</a>
            <a style={styles.anchors} href="">Info</a>
        </nav>
        <ShoppingCartIcon style={styles.icono} />
        </header>
    )
}

const styles ={
    container:{
        backgroundColor:"#0a0a0a",
        minheight: "100vh",
        maxwidth:"100%",
        display:"flex",
        flexDirection:"columms",
        justifyContent:"space-between",
        alignItems:"center",
    },
    navBar:{
        marginLeft:"10rem",
    },
    imagen:{
        marginLeft:"2rem",
        width:"15%",
    },
    anchors:{
        color:"#F1C40F",
        textDecoration:"none",
        padding:8,
    },
    icono:{
        color:"#F1C40F",
        width:"10rem",
    }
}

export default Header