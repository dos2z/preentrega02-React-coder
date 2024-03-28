import "./OrderSucces.css"
import { Link } from "React-router-dom"


const OrderSuccess = ({buyerName, orderId}) => {
    
    return (
        <div className="OrderSucces">
            <h1 className="Checkout_h1_message">Orden creada con éxito!</h1>
            <p>¡Muchas gracias por tu compra <span className="buyerName">{buyerName}</span>!</p>
            <p>El código de tu pedido es: <span className="orderId">{orderId}</span></p>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default OrderSuccess