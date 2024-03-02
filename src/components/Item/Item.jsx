
const Item = (prod) => {
    return (
        <div>
            <img src={`./src/assets/productsImg/${prod.category}/${prod.img}`} alt={prod.nombre} style={{ width: 300 }} />
            <h3>{prod.nombre}</h3>
            <p>$ {prod.precio}</p>
            <button>Detalle</button>
        </div>
    )
}

export default Item