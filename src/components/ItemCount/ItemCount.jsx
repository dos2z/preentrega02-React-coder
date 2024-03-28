import './ItemCount.css'
import { Link } from 'React-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useItemCount } from '../../hooks/useItemCount'


const ItemCount = ({ product }) => {
  const { addToCart, decrement, increment, contador, molienda, selectMolienda } = useItemCount(product)
  const { isInCart } = useCart()
  const productExist = isInCart(product.id)
  const isCoffee = product.category
  let visibility;
  if (isCoffee == "cafe") {
    visibility = "visible"
  } else {
    visibility = "noVisible"
  }

  const verMol = () => {
    console.log(molienda);
  }

  return (
    <div className="itemDetailContador">
      {productExist

        ? <Link to="/cart" >
          <button className="iDCviewCart">Ver carrito</button>
        </Link>

        : <div className='IDCoptions'>

          <div className={visibility}>
            <select value={molienda} onChange={selectMolienda} >
              <option value="">Elegí la molienda</option>
              <option value="en grano">En grano</option>
              <option value="espresso" >espresso</option>
              <option value="moka">moka</option>
              <option value="aeropress">aeropress</option>
              <option value="filtro">filtro</option>
              <option value="prensa francesa">prensa francesa</option>
            </select>
          </div>
          <div className='IDCbuttons'>
            <div className="iDCcontrol">
              <button onClick={decrement} className="iDCButton"> - </button>
              <p className="iDCNumber">{contador}</p>
              <button onClick={increment} className="iDCButton"> + </button>
            </div>
            <button className="iDCaddCartButton" onClick={addToCart}>Agregar al carrito</button>
          </div>


        </div>
      }
    </div>
  )
}

export default ItemCount