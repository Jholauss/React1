
import { useNavigate } from 'react-router-dom'


const Item = ({product}) => {
  const navegate = useNavigate();
  const {img, name, stock ,id,price}= product
  return (
    <div className="card d-flex aling-items-center" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <h6 className="card-text">{name}</h6>
        <p className="card-text">Stock: {stock} Und.</p>
        <p>Precio: {price}</p>
        <button className='btn btn-primary' onClick={()=>navegate(`/Detail/${id}`)} >Ver mas </button>
    </div>
    
</div>
  )
}

export default Item
