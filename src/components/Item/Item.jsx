
const Item = (prod) => {
    return (
        <div key={prod.id}>
            <img src={`./src/assets/productsImg/coffee/${prod.img}`} alt={prod.nombre} style={{ width: 200 }} />
            <p>{prod.img}</p>
            <h3>{prod.nombre}</h3>
            <button>Detalle</button>
        </div>
    )
}

export default Item