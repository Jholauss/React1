import React ,{useState} from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../firebase/firebase'
import {doc , collection,getDoc} from 'firebase/firestore'
import { BallTriangle } from 'react-loader-spinner'

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    const { id }= useParams()
    useEffect(() => {
        const productosCollection = collection(db,'productos')
        const refDoc = doc(productosCollection,id)
        getDoc(refDoc).then((res)=>{
            setProducto({
                id: res.id,
                ...res.data()
            })
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))   
    },[id])
    return (
        <div>
            {loading ? <BallTriangle height="100" width="8000"  color="red" align="center" ariaLabel='loading'/> :<ItemDetail producto={producto}/> }

        </div>
    )
}

export default ItemDetailContainer