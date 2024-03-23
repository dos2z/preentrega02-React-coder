import { useState } from "react"
import { useCart } from "../../context/CartContext"

const Checkout = () => {
const {cart}=useCart()
  //Para el form
const [buyerName, setBuyerName] = useState("")
const [buyerStreet, setBuyerStreet] = useState("")
const [buyerStreetNumber, setBuyerStreetNumber] = useState("")
const [buyerCity, setBuyerCity] = useState("")
const [buyerProvince, setBuyerProvince] = useState("")
const [BuyerCP, setBuyerCP] = useState("")
const [buyerEmail, setBuyerEmail] = useState("")
const [buyerPhone, setBuyerPhone] = useState("")

const verDatos = (evt)=>{
  evt.preventDefault()
  console.log(buyerName);
  console.log(buyerCity);
  console.log(BuyerCP);
}


  return (
    <div>
      <h1>Datos de envío</h1>
      <form action="">
        <input type="text" value={buyerName} onChange={val => setBuyerName(val.target.value)} placeholder="Nombre" />
        <input type="text" value={buyerStreet} onChange={val => setBuyerStreet(val.target.value)} placeholder="Calle"/>
        <input type="number" value={buyerStreetNumber} onChange={val => setBuyerStreetNumber(val.target.value)} placeholder="S/N"min="0"/>
        <input type="text" value={buyerCity} onChange={val => setBuyerCity(val.target.value)} placeholder="Ciudad" />
        <input type="text" value={buyerProvince} onChange={val => setBuyerProvince(val.target.value)} placeholder="Provincia" />
        <input type="number" value={BuyerCP} onChange={val => setBuyerCP(val.target.value)} placeholder="Codigo postal" min="0"/>
        <input type="email" value={buyerEmail} onChange={val => setBuyerEmail(val.target.value)} placeholder="Correo electrónico" />
        <input type="phone" value={buyerPhone} onChange={val => setBuyerPhone(val.target.value)} placeholder="teléfono" />
        <button onClick={verDatos}>Listo</button>
      </form>
    </div>
  )
}

export default Checkout