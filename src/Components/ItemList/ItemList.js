import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
  return (
    <div>
        <h3 className='text-end'>Lista de productos</h3>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList