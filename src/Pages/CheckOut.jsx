import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Components/Context/CartContext'
import { db } from '../firebase/firebase';
import { collection , addDoc , serverTimestamp } from 'firebase/firestore';
import swal from 'sweetalert';
import imagenes from '../assets/imagenes'
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


const CheckOut = () => {
    const[data, setData]=useState({})
    const [ordenId, setOrdenId]= useState('')
    const navegar = useNavigate()
    const {cart,clearCart,calcularTotal}= useContext(CartContext);
    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const finalizarCompra=(e)=>{
        e.preventDefault()
        const ventasCollection=collection( db, 'ventas');
        addDoc(ventasCollection,{
          data,
          items: cart.map(product=>({ name:product.name, price:product.price, cantidad:product.qty})),
          date:serverTimestamp(),
          total : calcularTotal(),
        })
        .then((res) => {
            setOrdenId(res.id)
            clearCart()
            alerta()
        })
        .catch(error => console.log(error))
      }

  return (
    <div>
        {!ordenId ?<>
        <h2>Checkout</h2>
        <div className='col-12 row container-fluid'>
        <form className='row col-9' onSubmit={finalizarCompra}>
            <div className='col-6'>
                <label className='form-label'>Nombre</label>
                <input className='form-control border-danger' required type='text' name='nombre' placeholder='Nombre' onChange={handleChange}/>
            </div>
            <div className='col-6'>
                <label className='form-label'>Apellidos</label>
                <input className='form-control border-danger' required type='text' name='apellido' placeholder='Apellidos' onChange={handleChange}/> 
            </div>
            <div className='col-12'>
            <label className='form-label'>Email</label>
            <input className='form-control w-50 border-danger' required type='email' name='email' placeholder='Email' onChange={handleChange}/>
            </div>
            <div>
            <label className='form-label'>Telefono</label>
            <input className='form-control w-50 border-1 border-danger' required type='text' name='Telefono' placeholder='Telefono' onChange={handleChange}/>
            </div>
            <div>
            <label className='form-label'>Direccion</label>
            <input className='form-control w-50 border-1 border-danger' required type='text' name='direccion' placeholder='Direccion' onChange={handleChange}/>
            </div>
            <div>
            <label className='form-label'>Referencia</label>
            <input className='form-control w-50 border-1 border-danger' required type='text' name='Referencia' placeholder='Referencia' onChange={handleChange}/>
            </div>
            
            <div className='pt-3 pb-3 text-center'>
            <input className='btn btn-primary w-25 border-danger ' type='submit' value='Finalizar compra'/>
            </div>
            
            
        </form>

        <div className='row col-3 '>
         <img className='w-100 d-flex justify-content-center align-items-center' src={imagenes.gif4} style={{width:"100%"}} alt="gif" />
        </div>

        </div>
        </>
        :<>
        <h1>Muchas gracias por tu compra</h1>
        <p>Su orden de compra es : {ordenId}</p>
        <button className='btn btn-success' onClick={()=> navegar('/')}>Volver a home</button>
        </>}
    </div>

  )

}



export default CheckOut