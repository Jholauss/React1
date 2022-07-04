import React from 'react'

const Item = ({product}) => {
  console.log(product)
  const {img, name, description}= product
  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <button style={styles.button}>Ver Más</button>
    </div>
    
</div>
  )
}

export default Item

const styles = {
    button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        color: '#fff',
        border: 'none',
        padding: '1rem',
        borderRadius: '100px',
        margin: '1rem',
        cursor: 'pointer',
        width: '8rem',
        textAlign: 'center',
        fontSize: '1rem',
    }
}