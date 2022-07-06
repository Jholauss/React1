import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../mocks/DataBase'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  const {tipocategoria}=useParams()
    useEffect(()=>{
      setLoading(true)
      data
      .then((res)=>{
        if(!tipocategoria){
          setProductList(res)
      }else{
        setProductList(res.filter((prod)=>prod.categoria===tipocategoria))
      }
      })
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
    },[tipocategoria])
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