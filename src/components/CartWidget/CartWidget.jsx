import './CartWidget.css'
import cartIcon from "../../assets/icons/carrito/cart-check.png"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {Link} from 'React-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  

  
 
  
  return (
    <Link to="/cart" className="cartWidget">
      <img src={cartIcon} alt="carrito" className="cartWidgetImg" />
      <span className="cartWidgetNumber">{totalQuantity}</span>
    </Link>
  )
}

export default CartWidget