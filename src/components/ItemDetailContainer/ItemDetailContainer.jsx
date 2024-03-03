import { useEffect, useState } from "react"
import { getProductsById } from "../../assyncMock"
import { useParams } from 'React-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    const {prodId} = useParams()

    useEffect(() => {
        getProductsById(Number(prodId))
            .then(res => {
                setProduct(res)
            })
            
            .catch(err => console.log(err))
    }, [prodId])

    return (
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer