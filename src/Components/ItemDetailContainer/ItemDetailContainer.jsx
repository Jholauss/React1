import React ,{useState} from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../mocks/DataBase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    const { id }= useParams()
    useEffect(() => {
        data
        .then((res)=>setProducto(res.find((item) => item.id===id)))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))   
    },[id])
    console.log('producto',producto);
    return (
        <div>
            {loading ? <p>Cargando...</p>:<ItemDetail producto={producto}/> }

        </div>
    )
}

export default ItemDetailContainer