
import './CartItem.css'
import Icon from '@mdi/react';
import { mdiDeleteForever } from '@mdi/js';

import { useCartItem } from '../../../hooks/useCartItem';

const CartItem = (prod) => {

    const { eliminar, decrement, increment, itemQuantity, subtotal } = useCartItem(prod)

    return (
        <div className="CartItem">
            <div className='CartItem__start'>
                <img src={prod.img} width={100} />
                <div className="CartItem__infoProduct">
                    <h3>{prod.nombre}</h3>
                    {prod.molienda ?? <p className="CartItem__molienda">Molienda: {prod.molienda}</p>}
                    <p className="CartItem__precio"> $ {prod.precio}</p>
                    <div className="CartItem__quantity">
                        <button onClick={decrement}>-</button>
                        <p>{itemQuantity}</p>
                        <button onClick={increment}>+</button>
                    </div>
                </div>

            </div>
            <div className='CartItem__end'>
                <p className='CartItem__subtotal'>$ {subtotal}</p>
                <div onClick={eliminar}className='CartItem__deleteItem'><Icon path={mdiDeleteForever} color="red" size={1} /></div>
            </div>

        </div>
    )
}

export default CartItem