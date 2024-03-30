import './Item.css'
import { Link } from 'React-router-dom'

const Item = (prod) => {

    let disponible;
    let disponibleClass;

    prod.stock ? disponible = true : disponible = false;
    disponible ? disponibleClass = 'disponible' : disponibleClass = 'noDisponible';

    return (
        <div className='item'>
            <div className='itemImgContainer'>
                <img src={`../src/assets/productsImg/${prod.category}/${prod.img}`} alt={prod.nombre} />
            </div>
            <h3>{prod.nombre}</h3>
            <p className='itemPrice'>$ {prod.precio ?? prod.precio250g}</p>
            {disponible
                ? <div className='itemButtonContainer'>
                    <Link to={`/detalle/${prod.id}`} className='detailButton'>Ver detalle</Link>
                </div>
                : <h4 className='noDisponible'>No disponible</h4>
            }


        </div>
    )
}

export default Item