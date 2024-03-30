
const Brief = (prod) => {

    return (
        <div className="Checkout__briefProducts">
            <h4>{prod.nombre}</h4>
            <p>
                {prod.molienda
                    ? <span>Molido para: {prod.molienda} ||  </span> :
                    <span></span>}$ {prod.precio} x <span className="bold">{prod.quantity}</span> || <span className="bold">$ {prod.quantity * prod.precio}</span> 
            </p>
        </div>
    )
}

export default Brief