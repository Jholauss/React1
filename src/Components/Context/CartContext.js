import React ,{createContext,useEffect,useState} from 'react'

export const CartContext = createContext(); 
    const CartProvider = ({children}) => {
        const [cart, setCart] = useState([]);
        const [qtyProducts, setQtyProducts] = useState(0);

        const getQtyProducts = () => {
            let qty = 0;
            cart.forEach(product=>qty+=product.qty);
            setQtyProducts(qty);
        };

        useEffect(() =>{
            getQtyProducts()
        },[cart])

        const addToCart = (product,cantidad) => {
            if (isInCart(product.id)){
                const found = cart.find(item => item.id === product.id);
                const index = cart.indexOf(found);
                const aux =[...cart];
                aux[index].cantidad += cantidad;
                setCart(aux);
                sumarCantidad(product.id,cantidad);
            }else{
                setCart([...cart, {...product, cantidad}]);
            }
            getQtyProducts();
        };
        const deleteProduct=(id)=>{
            setCart(cart.filter(producto=>producto.id !== id))    
        };
        const isInCart = (id) => {
            return cart.some(prod => prod.id === id);
        };

        const sumarCantidad = (id,cantidad) => {
            const newCart = cart.map((prod) =>
            prod.id === id 
            ? {...prod, cantidad: prod.cantidad + cantidad}
            : prod
            );
            setCart(newCart); 
        };
        const clearCart = () => {
            setCart([]);
        };
        const calcularTotal = () => {
            return cart.reduce(
                (total, suma) => total + suma.price * suma.qty,0
            );
        };

 

        return (
            <CartContext.Provider value={{cart, addToCart,qtyProducts,deleteProduct,calcularTotal,clearCart}}>
                {children}
            </CartContext.Provider>
        );
    };
    export default CartProvider;



