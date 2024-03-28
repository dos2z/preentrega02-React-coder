import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"


export const useCartItem = (prod) => {
    const {deleteItem, modifyQuantity } = useCart()
    const [itemQuantity, setItemQuantity] = useState(prod.quantity)
    const [subtotal, setSubtotal] = useState(prod.precio * prod.quantity)

    const eliminar = () => {
        deleteItem(prod.id)
    }
    const decrement = () => {
        if (1 < itemQuantity) {
            setItemQuantity(itemQuantity - 1)
        }
    }
    const increment = () => {
        if (itemQuantity < prod.stock) {
            setItemQuantity(itemQuantity + 1)
        }
    }

    useEffect(() => {
        modifyQuantity(prod.id, itemQuantity)
        setSubtotal(itemQuantity * prod.precio)
    }, [itemQuantity])
return {
    eliminar,
    decrement,
    increment,
    itemQuantity,
    subtotal
}
}   