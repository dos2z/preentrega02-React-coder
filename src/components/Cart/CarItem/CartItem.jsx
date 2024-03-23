import { useCart } from '../../../context/CartContext';
import './CartItem.css'
import React, { useEffect, useState } from 'react'

const CartItem = (prod) => {
    const { cart, deleteItem,  modifyQuantity  } = useCart()
    const [itemQuantity, setItemQuantity] = useState(prod.quantity)
    const [subtotal, setSubtotal] = useState(prod.precio * prod.quantity)
    const [product, setProduct] = useState(prod)



    const eliminar = () => {
        deleteItem(prod.id)
    }


    const [cant, setCant] = useState(prod.quantity)

    const decrement = () => {
        if (1 < itemQuantity) {
            setItemQuantity(itemQuantity - 1)
            
        }
    }
    const increment = () => {
        if (itemQuantity < prod.stock) {
            setItemQuantity(itemQuantity + 1)
            //modifyQuantity(prod, itemQuantity);
        }
    }

    useEffect(() => {
        setSubtotal(itemQuantity * prod.precio)
    }, [itemQuantity])

    return (
        <div className="CartItem">
            <h3>{prod.nombre}</h3>
            <div>
                <img src={`../src/assets/productsImg/${prod.category}/${prod.img}`} width={100} />
                <p className="CartItem__precio"> $ {prod.precio}</p>
                <div className="CartItem__quantity">
                    <button onClick={decrement}>-</button>
                    <p>{itemQuantity}</p>
                    <button onClick={increment}>+</button>
                </div>
                <p>{subtotal}</p>
                <button onClick={eliminar}>Eliminar</button>
            </div>

        </div>
    )
}

export default CartItem