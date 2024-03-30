
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"




const ItemDetail = (product) => {

  const isCoffee = product.category
  let visibility;
  if (isCoffee == "cafe") {
    visibility = ""
  } else {
    visibility = "noVisible"
  }



  let disponible;
  let disponibleClass;

  product.stock ? disponible = true : disponible = false;
  disponible ? disponibleClass = 'disponible' : disponibleClass = 'noDisponible';

  return (
    <div className="itemDetail">
      <div className="itemDetailImgContainer">
        <img src={product.img} alt={product.nombre} />
      </div>
      <div className='itemDetail__detailContainer'>
        <h3 className="itemDetailTitle">{product.nombre}</h3>
        <p className="itemDetailPrecio">$ {product.precio ?? product.precio250g}</p>
        {<div className={`itemDetail__categoryCafe ${visibility}`}>
          <h4>{product.region}</h4>
          <p className="itemDetailNotas">{product.notas}</p>
          <ul>
            <li><span>Variedad: </span>{product.variedad}</li>
            <li><span>Altura: </span>{product.altura}</li>
            <li><span>Procesamiento: </span>{product.procesamiento}</li>
          </ul>
        </div>}
        <p className="itemDetailDescripcion">{product.descripcion}</p>
        <p className={disponibleClass}>Disponibles: {product.stock}</p>

        {disponible
          ? <ItemCount product={product} />
          : <h4>Producto fuera de stock</h4>}
      </div>



    </div>
  )
}

export default ItemDetail