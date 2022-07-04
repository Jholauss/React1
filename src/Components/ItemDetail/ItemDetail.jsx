import React from 'react'
import Itemcount from '../itemCount/Itemcount'

const ItemDetail = ({producto}) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
      };
  return (
    <div style={styles.container}>
        <h3>Detalle de producto</h3>
        <p>{producto.name}</p>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
        <Itemcount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#2c3e50',
        color: '#fff',
        textAlign: 'center',}
}