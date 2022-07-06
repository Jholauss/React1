import React from 'react'
import Itemcount from '../itemCount/Itemcount'
import { useNavigate } from 'react-router-dom'
const ItemDetail = ({producto}) => {
  const navegate = useNavigate();
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
      };
  return (
    <div style={styles.container}>
        <h3 className='text-start'>Detalle de producto:</h3>
                <img style={styles.img} src={producto.img} alt={producto.name}/>
                <p>{producto.name}</p>
                <p>{producto.description}</p>
                <Itemcount initial={1} stock={producto.stock} onAdd={onAdd}/>
                <button className='btn btn-danger' onClick={()=>navegate(`/productos`)}>Volver a Productos</button> 
        
    </div>
  )
}

export default ItemDetail

const styles = {
    container: {
        maxWidth: '100%',
        backgroundColor: '#2c3e50',
        color: '#fff',
        textAlign: 'center',},
    img:{
        width: '20%',
    }

}