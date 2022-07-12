import React from 'react'
import { useNavigate } from 'react-router-dom';
import imagenes from '../assets/imagenes'

const Error404 = () => {
    const navegate= useNavigate();
  return (
    <div style={styles.container} className="container" >
        <img  src={imagenes.Error404} class="w-50 " alt="Error404"></img>
        <div className='d-flex text-center'>
        <button className='btn btn-danger' onClick={()=>navegate('/') }>Volver al inicio</button>
        </div>
    </div>
  )
}

export default Error404

const styles = {
    container:{
        backgroundColor: '#f5f5f5',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

}        