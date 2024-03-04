import { useState } from "react"

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

  return (
    <div>
      <h3>{product.nombre}</h3>
      <div>
        <img src={`../src/assets/productsImg/${product.category}/${product.img}`} alt={product.nombre} style={{ width: 500 }} />
      </div>
      <p>{product.notas}</p>
      <p>{product.descripcion}</p>

      <p>$ {product.precio??product.precio250g}</p>
      <button onClick={decrement}> - </button>
      <p>{contador}</p>
      <button onClick={increment}> + </button>
      <button>Agregar al carrito</button>



    </div>
  )
}

export default ItemDetail