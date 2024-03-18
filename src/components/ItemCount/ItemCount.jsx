import './ItemCount.css'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

const ItemCount = ({ props }) => {
  const { cart, addItem, isInCart } = useCart()
console.log(cart);

  const [contador, setContador] = useState(1)

  const increment = () => {
    if (contador < props.stock) {
      setContador(contador + 1)
    }
  }
  const decrement = () => {
    if (1 < contador) {
      setContador(contador - 1)
    }
  }

  const addToCart = () => {
    let prodToAdd = {
      id: props.id,
      nombre: props.nombre,
      quantity: contador,
      precio: props.precio250g,
    }
    prodToAdd.subtotal = prodToAdd.precio * prodToAdd.quantity;
    addItem(prodToAdd)
  }

  return (
    <div className="itemDetailContador">
      <div className="iDCcontrol">
        <button onClick={decrement} className="iDCButton"> - </button>
        <p className="iDCNumber">{contador}</p>
        <button onClick={increment} className="iDCButton"> + </button>
      </div>
      <button className="iDCaddCartButton" onClick={addToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount