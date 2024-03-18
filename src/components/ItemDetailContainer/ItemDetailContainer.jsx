import { useEffect, useState } from "react"
import { getProductsById } from "../../assyncMock"
import { useParams } from 'React-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { prodId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsById(Number(prodId))
            .then(res => {
                setProduct(res)
            })

            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [prodId])

    
    return (
        < >
           {loading ?   <Loading /> : <ItemDetail {...product} />}
        </>
    )
}

export default ItemDetailContainer