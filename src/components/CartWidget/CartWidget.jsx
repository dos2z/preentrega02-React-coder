import cart from "../../assets/icons/carrito/cart-check.png"
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img src={cart} alt="carrito" className="cartWidgetImg" />
      <span className="cartWidgetNumber">0</span>
    </div>
  )
}

export default CartWidget