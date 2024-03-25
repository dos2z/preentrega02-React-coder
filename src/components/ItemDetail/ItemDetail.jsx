
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = (product) => {
  


  let disponible;
  let disponibleClass;

  product.stock?disponible=true:disponible=false;
  disponible?disponibleClass='disponible':disponibleClass='noDisponible';

  return (
    <div className="itemDetail">
      <h3 className="itemDetailTitle">{product.nombre}</h3>
      <div className="itemDetailImgContainer">
        <img src={`../src/assets/productsImg/${product.category}/${product.img}`} alt={product.nombre} />
      </div>
      <p className="itemDetailNotas">{product.notas}</p>
      <p className="itemDetailDescripcion">{product.descripcion}</p>
      <p className="itemDetailPrecio">$ {product.precio ?? product.precio250g}</p>
      <p className={disponibleClass}>Disponibles: {product.stock}</p>
      {disponible?<ItemCount product={product} />:<h4>Producto fuera de stock</h4>}


    </div>
  )
}

export default ItemDetail