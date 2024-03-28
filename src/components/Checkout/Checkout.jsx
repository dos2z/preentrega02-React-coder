import "./Checkout.css"
import Loading from "../Loading/Loading"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { stockChecker } from "../../services/firebase/stockChecker"
import OrderSuccess from "./OrderSuccess/OrderSuccess"

const Checkout = () => {
  const { cart, totalQuantity, finalPrice, clearCart } = useCart()
  const [orderCreated, setOrderCreated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState("")
  

  //Para el form
  const [buyerName, setBuyerName] = useState("")
  const [buyerStreet, setBuyerStreet] = useState("")
  const [buyerStreetNumber, setBuyerStreetNumber] = useState("")
  const [buyerCity, setBuyerCity] = useState("")
  const [buyerProvince, setBuyerProvince] = useState("")
  const [BuyerCP, setBuyerCP] = useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [buyerPhone, setBuyerPhone] = useState("")

  const createOrder = async(evt) =>{
    evt.preventDefault()
    const objOrder = {
      buyer: {
        name: buyerName,
        adress: {
          number: buyerStreetNumber,
          street: buyerStreet,
          city: buyerCity,
          province: buyerProvince,
          CP: BuyerCP,
        },
        email: buyerEmail,
        phone: buyerPhone
      },
      items: cart,
      totalQuantity,
      finalPrice,
      date: new Date()
    }
    try{
      stockChecker(cart)
      const stockAvailable = stockChecker(cart)
      //creacion de la orden
      if (stockAvailable) {
          const orderRef = collection(db, "orders");
          const orderAdded = await addDoc(orderRef, objOrder)
          setOrderId(orderAdded.id)
          clearCart()
          setOrderCreated(true)
      } else {
          console.log("Hay productos fuera de stock");
      }
    }
    catch (err) {
        console.log(err);
    }
    finally {
      setLoading(false)
    }
  }

  

  if (loading) {
    return (
      <>
        <h1 className="Checkout_h1_message">Generando orden</h1>
        <Loading />
      </>
    )
  }
  if (orderCreated) {
    return (
      <OrderSuccess  buyerName={buyerName} orderId={orderId}/>
    )
  }
  

  return (
    <div className="Checkout">
      <h1>Datos de envío</h1>
      <form>
        <input type="text" value={buyerName} onChange={val => setBuyerName(val.target.value)} placeholder="Nombre" />
        <input type="text" value={buyerStreet} onChange={val => setBuyerStreet(val.target.value)} placeholder="Calle" />
        <input type="number" value={buyerStreetNumber} onChange={val => setBuyerStreetNumber(val.target.value)} placeholder="S/N" min="0" />
        <input type="text" value={buyerCity} onChange={val => setBuyerCity(val.target.value)} placeholder="Ciudad" />
        <input type="text" value={buyerProvince} onChange={val => setBuyerProvince(val.target.value)} placeholder="Provincia" />
        <input type="number" value={BuyerCP} onChange={val => setBuyerCP(val.target.value)} placeholder="Codigo postal" min="0" />
        <input type="email" value={buyerEmail} onChange={val => setBuyerEmail(val.target.value)} placeholder="Correo electrónico" />
        <input type="phone" value={buyerPhone} onChange={val => setBuyerPhone(val.target.value)} placeholder="Teléfono" />
        <button onClick={createOrder}>Generar orden</button>
      </form>
    </div>
  )
}

export default Checkout