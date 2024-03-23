import { useCart } from "../../context/CartContext"

const CartPreview = () => {
const {cart} = useCart

  return (
    <div>CartPreview</div>
  )
}

export default CartPreview