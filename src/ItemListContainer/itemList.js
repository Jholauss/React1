import React from "react";

const ItemListContainer=({greeting})=>{
    return(
        <div style={styles.landing}><span>{greeting}</span></div>
    );
};

const styles={
    landing:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        maxWidth:"100%",
        height:"15rem",
        backgroundColor:"#282c34",
        color:"#fff",
    },
}
export default ItemListContainer;