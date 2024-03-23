import './Cart.css'
import { useCart } from "../../context/CartContext"
import CartItem from "./CarItem/CartItem"
import { Link } from "React-router-dom"



const Cart = () => {
  const { cart, clearCart, finalPrice } = useCart()


  const vaciarCarrito = () => {
    clearCart()
    console.log(cart.lenght);

  }


  if (!cart.length) {
    return (
      <div className="Cart__vacio">
        <Link to="/">
          <h1>Carrito Vacio</h1>
        </Link>
      </div>
    )
  }

  return (
    <>
      <h1>Carrito</h1>
      <Link to="/checkout">Continuar compra</Link>
      <div className="Cart__price">
        <h2>Total: $<span>{finalPrice}</span></h2>
        <button onClick={vaciarCarrito}>Eliminar carrito</button>
      </div>
      {cart.map((prod) => {
        return (
          <CartItem key={prod.id} {...prod}></CartItem>)
      })}
    </>
  )
}

export default Cart