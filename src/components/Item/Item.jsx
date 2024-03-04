import { Link } from 'React-router-dom'
import './Item.css'

const Item = (prod) => {
    return (
        <div className='item'>
            <div className='itemImgContainer'>
                <img src={`../src/assets/productsImg/${prod.category}/${prod.img}`} alt={prod.nombre} />
            </div>
            <h3>{prod.nombre}</h3>
            <p className='itemPrice'>$ {prod.precio ?? prod.precio250g}</p>
            <div className='itemButtonContainer'>
                <Link to={`/detalle/${prod.id}`} className='detailButton'>Ver detalle</Link>
            </div>

        </div>
    )
}

export default Item