import './ItemCount.css'
import { Link } from 'React-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

const ItemCount = ({ product }) => {
  const { addItem } = useCart()


  const [contador, setContador] = useState(1)

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
  
  const addToCart = () => {
    let prodToAdd = {
      id: product.id,
      category: product.category,
      nombre: product.nombre,
      quantity: contador,
      precio: product.precio250g??product.precio,
      img: product.img,
      stock: product.stock
    }
    addItem(prodToAdd);
  }

  return (
    <div className="itemDetailContador">
      <div className="iDCcontrol">
        <button onClick={decrement} className="iDCButton"> - </button>
        <p className="iDCNumber">{contador}</p>
        <button onClick={increment} className="iDCButton"> + </button>
      </div>
      <button className="iDCaddCartButton" onClick={addToCart}>Agregar al carrito</button>
      <Link to="/cart">Ver carrito</Link>
    </div>
  )
}

export default ItemCount