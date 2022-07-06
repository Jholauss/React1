import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({product}) => {
  const navegate = useNavigate();
  const {img, name, description ,id}= product
  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <button className='btn btn-primary' onClick={()=>navegate(`/Detail/${id}`)} >Ver mas </button>
    </div>
    
</div>
  )
}

export default Item
