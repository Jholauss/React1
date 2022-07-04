import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../mocks/DataBase'

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

    useEffect(()=>{
      data
      .then((res)=>setProductList(res))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
    },[])
    console.log(productList);
  return (
    <div>
      <p className='bg-dark text-white' style={styles.title}>{greeting}</p>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
    </div>
  )
}

export default ItemListContainer

const styles = {
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
}