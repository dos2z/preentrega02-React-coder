import { useContext } from "react"
import cartIcon from "../../assets/icons/carrito/cart-check.png"
import { CartContext } from "../../context/CartContext"
import './CartWidget.css'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  console.log(totalQuantity);

  return (
    <div className="cartWidget">
      <img src={cartIcon} alt="carrito" className="cartWidgetImg" />
      <span className="cartWidgetNumber">{totalQuantity}</span>
    </div>
  )
}

export default CartWidget