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
    <div style={styles.container} className="container" >
        <h3 className='text-start'>Detalle de producto:</h3>
        <div className='d-flex align-items-center row col-12'>
        <div className='col-6 text-center'>
        <img  src={producto.img} alt={producto.name} width='50%'/>
        </div>
        <div className='col-6 '>
        <h4 className='text-end'>{producto.name}</h4>
        <p>{producto.description}</p>
        <p className='text-end'>Precio: ${producto.price}</p>
        <div style={styles.description}>
        <p>Cantidad: {producto.qty}</p>
                {compra ? <div >
                <button className='btn btn-info mx-2' onClick={()=>navegate(`/productos`)}>Seguir Comprando</button> 
                <button className='btn btn-success' onClick={()=>navegate(`/Carrito`)}>Ir al carrito</button>
                </div> :
                <div>
                <Itemcount stock={producto.stock} onAdd={onAdd} count={count} setCount={setCount}/>
                <button className='btn btn-danger mx-2' onClick={()=>navegate(`/productos`)}>Volver a Productos</button>
                </div> }
                </div>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail

const styles = {
    container: {
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '2rem',
        margin: '2rem auto',
        borderRadius: '1rem',
        boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)',
        
    },
    description:{
      textAlign: 'center'
    }


}