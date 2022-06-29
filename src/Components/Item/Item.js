import React from 'react'
import ItemCount from '../itemCount/Itemcount';

const Item = ({product}) => {
  console.log(product)
  const {img, name, description}= product
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
</div>
  )
}

export default Item