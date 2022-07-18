import React, { useState , useContext } from 'react'
import Itemcount from '../itemCount/Itemcount'
import { useNavigate } from 'react-router-dom'
import{CartContext} from '../Context/CartContext'
const ItemDetail = ({producto}) => {
  const [count, setCount] = useState(1);
  const [compra, setCompra] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navegate = useNavigate();
    const onAdd = (count) => {
        setCompra(true);
        const product = { ...producto, qty: count };
        addToCart(product);
    }
  return (
    <div style={styles.container}>
        <h3 className='text-start'>Detalle de producto:</h3>
                <img style={styles.img} src={producto.img} alt={producto.name}/>
                <p>{producto.name}</p>
                <p>{producto.description}</p>
                <p>Stock disponible: {producto.stock}</p>
                <p>Precio: {producto.price}</p>
                {compra ? <div>
                <button className='btn btn-info mx-2' onClick={()=>navegate(`/productos`)}>Seguir Comprando</button> 
                <button className='btn btn-success' onClick={()=>navegate(`/Carrito`)}>Ir al carrito</button>
                </div> :
                <div>
                <Itemcount stock={producto.stock} onAdd={onAdd} count={count} setCount={setCount}/>
                <button className='btn btn-danger mx-2' onClick={()=>navegate(`/productos`)}>Volver a Productos</button>
                </div> }
                
                
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