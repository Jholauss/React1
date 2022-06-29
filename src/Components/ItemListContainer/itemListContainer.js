import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProducts()
    },[])
  
  return (
    <div>
      <h1 style={styles.title}>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
      
    </div>
  )
}

export default ItemListContainer

const styles = {
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
}