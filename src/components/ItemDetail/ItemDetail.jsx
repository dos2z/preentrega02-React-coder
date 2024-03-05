import { useEffect, useState } from "react"
import './ItemDetail.css'

const ItemDetail = (product) => {
  const [contador, setContador] = useState(1)
 
  const increment = () => {
    if (contador <= product.stock) {
      setContador(contador + 1)
    }
  }
  const decrement = () => {
    if (1 < contador) {
      setContador(contador - 1)
    }
  }
  let disponible
  product.stock?disponible='disponible':disponible='noDisponible'

  return (
    <div className="itemDetail">
      <h3 className="itemDetailTitle">{product.nombre}</h3>
      <div className="itemDetailImgContainer">
        <img src={`../src/assets/productsImg/${product.category}/${product.img}`} alt={product.nombre} />
      </div>
      <p className="itemDetailNotas">{product.notas}</p>
      <p className="itemDetailDescripcion">{product.descripcion}</p>

      <p className="itemDetailPrecio">$ {product.precio ?? product.precio250g}</p>
      <p className={disponible}>Disponibles: {product.stock}</p>
      <div className="itemDetailContador">
        <div className="iDCcontrol">
          <button onClick={decrement} className="iDCButton"> - </button>
          <p className="iDCNumber">{contador}</p>
          <button onClick={increment} className="iDCButton"> + </button>
        </div>
        <button className="iDCaddCartButton">Agregar al carrito</button>
      </div>




    </div>
  )
}

export default ItemDetail