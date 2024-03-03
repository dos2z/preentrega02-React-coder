import { useState } from "react"

const ItemDetail = (product) => {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <h3>{product.nombre}</h3>
      <div>
        <img src={`../src/assets/productsImg/${product.category}/${product.img}`} alt={product.nombre} style={{ width: 500 }} />
      </div>
      <p>{product.notas ?? product.descripcion}</p>


    </div>
  )
}

export default ItemDetail