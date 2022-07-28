import React, { useContext } from 'react'
import { CartContext } from '../Components/Context/CartContext';
import { useNavigate } from 'react-router-dom';


const Carrito = () => {
  const {cart,deleteProduct,clearCart,calcularTotal}= useContext(CartContext);
  const navegate = useNavigate();
  

  if(cart.length===0){
        return <div className='d-flex justify-content-center row container-fluid align-items-center pt-5'>
        <img style={styles.img} src="https://i.postimg.cc/6q4VqDrP/cartvacio.png" alt="cart-vacio"/>
        <p className='fs-2 text-dark text-center'>CARRO VACIO</p>
        <button onClick={()=>{navegate(`/productos`)}} className='btn btn-success w-25'>Comprar</button>
        </div>
    }
  return (
    <div>
    <div className='bg-dark'>
            <p className='text-danger fs-4 text-uppercase text-center'>Lista de productos</p>
    </div>
      <div>
        {cart.map((product) => (
          <div style={styles.container} key={product.id}>
            <div>
            <img src={product.img} alt={product.name} width='100px'/>
            </div>
            <div className='d-flex'>
            <p style={styles.obj}>{product.name}</p>
            <p style={styles.obj}>Precio:${product.price}</p>
            <p style={styles.obj}>Cantidad: {product.qty}</p>
            </div>
            <div>
            <button className='btn btn-danger' onClick={()=>deleteProduct(product.id)}>Eliminar</button>
            </div>
          </div>))}
          <div className='container text-center pt-2'>
          <h5>Total a pagar: ${calcularTotal()}</h5>
          <button className='btn btn-danger ms-1' onClick={()=>clearCart()}>Cancelar compra</button>
          <button className='btn btn-success ms-1' onClick={()=>{navegate(`/checkOut`)}} >Finalizar Compra</button>
          </div>
      </div>
    </div>
  )
}

export default Carrito

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        marginBottom: '10px',
        backgroundColor: '#fff',
    },
    obj:{
        padding: '10px',
        margin: '10px',
        alignItems: 'center',
    },
    img :{
        width: '20%',
        margin: '10px',
    }
}