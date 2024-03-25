import { useEffect, useState } from "react"
import { useParams } from 'React-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { doc, getDoc } from "firebase/firestore"

import { db } from "../../services/firebase"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { prodId } = useParams()


    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, "products", prodId))
            .then(response => {
                const product = { id: response.id, ...response.data() }
                setProduct(product)
            })

            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [prodId])




    return (
        < >
            {loading ? <Loading /> : <ItemDetail {...product} />}
        </>
    )
}

export default ItemDetailContainer