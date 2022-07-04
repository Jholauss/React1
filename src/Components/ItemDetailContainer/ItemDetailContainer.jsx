import React ,{useState} from 'react'
import { useEffect } from 'react'
import { data } from '../../mocks/DataBase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        data
        .then((res)=>setProducto(res.find((item) => item.id==="02")))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    },[])
    console.log('producto',producto);
    return (
        <div>
            {loading ? <p>Cargando...</p>:<ItemDetail producto={producto}/> }

        </div>
    )
}

export default ItemDetailContainer