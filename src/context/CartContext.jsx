import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    // funcion que agrega el producto al carrito
    const addItem = (prodToAdd) => {
        if (!isInCart(prodToAdd.id)) {
            setCart([...cart, prodToAdd])
        } else {
            console.log("Este producto ya esta en el carrito. Deberias aumentar su cantidad");
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
    }
    //funcion que limpia el carrito
    const clearCart = () => {
        setCart([])
    }
    // funcion que modifica la cantidad del producto
    const modifyQuantity = (prod, quant)=>{
        let cloneProd = {...prod};
        deleteItem(prod.id)
        cloneProd.quantity = quant;
        console.log(quant);
        console.log("-------------");
        console.log(cloneProd);
        console.log(cloneProd.quantity);
        //setCart([...cart, cloneProd])
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