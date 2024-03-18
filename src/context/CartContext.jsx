import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (prodToAdd) => {
        if (!isInCart(prodToAdd.id)) {
            setCart([...cart, prodToAdd])
        } else {
            console.log("Este producto ya esta en el carrito. Deberias aumentar su cantidad");
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const deleteItem = (id) => {
        const carUpdated = cart.filter(prod => prod.id != id)
        setCart(carUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () =>{
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity;
        })
    }

    const totalQuantity = getTotalQuantity();

    

    return (
        <CartContext.Provider value={{cart, addItem, isInCart, deleteItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>    
    )
}

export const useCart = () => {
    return useContext(CartContext)
}