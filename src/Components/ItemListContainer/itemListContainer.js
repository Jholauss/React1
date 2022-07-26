import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from  'react-loader-spinner'
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([]);
  const [loading, setLoading]=useState(true);
  const {tipocategoria}=useParams();
    useEffect(()=>{
      setLoading(true)
      const qr = tipocategoria?query(collection(db,"productos"),where("category","==",tipocategoria))
        :collection(db,"productos")

        getDocs(qr)
        .then(result=>{
            const lista=result.docs.map(doc=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProductList(lista)
        })
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
    },[tipocategoria])
  return (
    <div>
      <p className='bg-dark text-white' style={styles.title}>{greeting}</p>
      {loading ? <BallTriangle height="100" width="8000"  color="red" align="center" ariaLabel='loading'/> : <ItemList productList={productList}/> }
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
  Puff:{
    marginTop: '1rem',
  }
}