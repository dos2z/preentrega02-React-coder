import { Link } from 'React-router-dom'

const Item = (prod) => {
    return (
        <div>
            <img src={`../src/assets/productsImg/${prod.category}/${prod.img}`} alt={prod.nombre} style={{ width: 300 }} />
            <h3>{prod.nombre}</h3>
            <p>$ {prod.precio??prod.precio250g}</p>
            <Link to={`/detalle/${prod.id}`}>Detalle</Link>
        </div>
    )
}

export default Item