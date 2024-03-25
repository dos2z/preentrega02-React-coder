import './ItemCount.css'
import { Link } from 'React-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

const ItemCount = ({ product }) => {
  const { addItem, prodAdded, cart } = useCart()
  const [contador, setContador] = useState(1)

  //funcionamiento del contador
  const increment = () => {
    if (contador < product.stock) {
      setContador(contador + 1)
    }
  }
  const decrement = () => {
    if (1 < contador) {
      setContador(contador - 1)
    }
  }
//agrega el producto al carrito
  const addToCart = () => {
    let precio = product.precio250g ?? product.precio
    const prodToAdd = new prodAdded(product.id,
      product.category,
      product.nombre,
      contador,
      precio,
      product.img,
      product.stock)
    addItem(prodToAdd);
  }

  return (
    <div className="itemDetailContador">
      {cart.length == 0 
      ?<div>
        <div className="iDCcontrol">
          <button onClick={decrement} className="iDCButton"> - </button>
          <p className="iDCNumber">{contador}</p>
          <button onClick={increment} className="iDCButton"> + </button>
        </div>
        <button className="iDCaddCartButton" onClick={addToCart}>Agregar al carrito</button>
      </div>
      :<Link to="/cart" >
        <button className="iDCviewCart">Ver carrito</button>
      </Link>}
    </div>
  )
}

export default ItemCount