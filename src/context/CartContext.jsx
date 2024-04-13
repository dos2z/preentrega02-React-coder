import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

//rescata el cart de localStorage si existe, antes de entrar al CartProvider
const memoryCart = JSON.parse(localStorage.getItem("cart")) ?? [];



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(memoryCart)
    
    

    //funciones para actualizar el localStorage
    const storageUpdated = ()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    const clearStorage = ()=>{
        localStorage.clear()
    }

    // funcion que agrega el producto al carrito
    const addItem = (prodToAdd) => {
        if (!isInCart(prodToAdd.id)) {
            setCart([...cart, prodToAdd])
            storageUpdated()
        } 
    }
    //pregunta si existe el producto en el carrito
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    //funcion que elimina el producto
    const deleteItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id != id)
        setCart(cartUpdated)
        storageUpdated()
    }
    //funcion que limpia el carrito
    const clearCart = () => {
        setCart([])
        clearStorage()
    }
  
    // funcion que modifica cantidad del producto
    const modifyQuantity = (id, newQuantity) => {
        const cartUpdated = cart.map((prod) =>{
            if(prod.id === id){
                return {...prod, quantity: newQuantity}
            }else{
                return prod
            }
        }) 
        setCart(cartUpdated)
        storageUpdated()
    }



    //funcion que toma la cantidad total de productos
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity;
        })
        return total
    }
    const totalQuantity = getTotalQuantity();

    //funcion que calcula el precio final
    const getFinalPrice = () => {
        let total = 0;
        cart.forEach(prod => {
            let subtotal = prod.precio * prod.quantity;
            total += subtotal;
        })
        return total
    }
    const finalPrice = getFinalPrice();


    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            deleteItem,
            clearCart,
            totalQuantity,
            finalPrice,
            modifyQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}