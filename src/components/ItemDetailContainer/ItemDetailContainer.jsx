import { useEffect, useState } from "react"
import { getProductsById } from "../../assyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(301)
            .then(res => {
                setProduct(res)
            })
            
            .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer