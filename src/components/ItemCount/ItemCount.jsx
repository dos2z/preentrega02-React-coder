import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)
 
    const increment = () => {
      if (contador < stock) {
        setContador(contador + 1)
      }
    }
    const decrement = () => {
      if (1 < contador) {
        setContador(contador - 1)
      }
    }

    return (
        <div className="itemDetailContador">
            <div className="iDCcontrol">
                <button onClick={decrement} className="iDCButton"> - </button>
                <p className="iDCNumber">{contador}</p>
                <button onClick={increment} className="iDCButton"> + </button>
            </div>
            <button className="iDCaddCartButton">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount