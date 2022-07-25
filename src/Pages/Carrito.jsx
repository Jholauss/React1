import React, { useContext } from 'react'
import { CartContext } from '../Components/Context/CartContext';
import { db } from '../firebase/firebase';
import { collection , addDoc , serverTimestamp } from 'firebase/firestore';
import swal from 'sweetalert';
const Carrito = () => {
  const {cart,deleteProduct,clearCart,calcularTotal}= useContext(CartContext);
  const datosComprador={
    nombre:'Pepe',
    apellido:'aszxsd',
    direccion:'Calle falsa 123',
    ciudad:'Ciudad falsa',
  }

  const finalizarCompra=()=>{
    const ventasCollection=collection( db, 'ventas');
    addDoc(ventasCollection,{
      datosComprador,
      items: cart.map(product=>({ name:product.name, price:product.price, cantidad:product.qty})),
      date:serverTimestamp(),
      total : calcularTotal()
    })
  }

  const alerta = () => {
    swal ({
      title: 'Compra realizada',
      icon: 'success',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }  
  })
}

  if(cart.length===0){
        return <p className='text-center fs-2 text-danger '>CARRO VACIO</p>
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
          <button className='btn btn-success ms-1' onClick={()=>{finalizarCompra();alerta();clearCart()}} >Finalizar Compra</button>
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
    }
}