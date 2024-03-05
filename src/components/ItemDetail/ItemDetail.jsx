
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (product) => {

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
      <ItemCount stock={product.stock}/>


    </div>
  )
}

export default ItemDetail