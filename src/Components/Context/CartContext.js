import React ,{createContext,useState} from 'react'

export const CartContext = createContext(); 
const {Provider} = CartContext;
    const CartCustomProvider = ({children}) => {
        const [products, setProducts] = useState([]);
        const [qtyProducts, setQtyProducts] = useState(0);

        
        
        const addProducts= (product) => {
            if(isInCart(product.id)){
                const found = products.find(p => p.id === product.id);
                const index = products.indexOf(found);
                const aux = [...products];
                aux[index].qty += product.qty;
                setProducts(aux);
            }else{
                setProducts([...products, product]);
                setQtyProducts(qtyProducts+1);
            }
            
        };
        const deleteProducts= (id) => {
            setProducts(products.filter(product => product.id !== id)) ;
            getQtyProducts();
        };
        const isInCart = (id) => {
            return products.some(product => product.id === id);
        };
        const getQtyProducts = () => {
            let qty =0;
            products.forEach(product => qty += product.qty);
            setQtyProducts(qty);    
        };
        const clear = () => {
            setProducts([]);
            setQtyProducts(0);
        };
        return (
            <Provider value={{products,addProducts,deleteProducts,clear,qtyProducts }} >
                {children}
            </Provider>
          )
    }
    export default CartCustomProvider;

