import { useState } from "react"
import { useCart } from "../context/CartContext"

export const useItemCount = (prod) => {
    const { addItem } = useCart()
    const [contador, setContador] = useState(1)
    const [molienda, setMolienda] = useState("")



    const selectMolienda = (evt) => {
        setMolienda(evt.target.value)
    }

    //funcionamiento del contador
    const increment = () => {
        if (contador < prod.stock) {
            setContador(contador + 1)
        }
    }
    const decrement = () => {
        if (1 < contador) {
            setContador(contador - 1)
        }
    }
    //agrega el prodo al carrito
    const addToCart = () => {
        let precio = prod.precio250g ?? prod.precio
        const prodToAdd = {
            id: prod.id,
            category: prod.category,
            nombre: prod.nombre,
            molienda: molienda,
            quantity: contador,
            precio: precio,
            img: prod.img,
            stock: prod.stock}
        addItem(prodToAdd);
    }

    return {
        addToCart,
        decrement,
        increment,
        contador,
        selectMolienda,
        molienda
    }
}