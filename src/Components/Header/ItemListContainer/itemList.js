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
        width:"100%",
        height:"calc(100vh - 60px)",
    }
}
export default ItemListContainer;