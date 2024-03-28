import './Cart.css'
import Icon from '@mdi/react';
import { mdiCartRemove } from '@mdi/js';

import { useCart } from "../../context/CartContext"
import CartItem from "./CarItem/CartItem"
import { Link } from "React-router-dom"



const Cart = () => {
  const { cart, clearCart, finalPrice, totalQuantity } = useCart()


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
      <div className='Cart__content'>
        <div className='Cart__prods'>
          {cart.map((prod) => {
            return (
              <CartItem key={prod.id} {...prod}></CartItem>)
          })}
        </div>

        <div className="Cart__orderSummary">
          <h2>Total:</h2>
          <p>Cantidad de productos: {totalQuantity}</p>
          <h3>Precio final: {finalPrice}</h3>
          <Link to="/checkout" className='Cart__checkoutBtn'><button>Continuar compra</button></Link>
          <div className='deleteCart' title='Eliminar carrito'>
            <Icon path={mdiCartRemove} size={1.5} onClick={vaciarCarrito} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart