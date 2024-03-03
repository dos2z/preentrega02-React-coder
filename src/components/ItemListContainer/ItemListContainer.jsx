import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../assyncMock";
import { useParams } from 'React-router-dom'
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { catId } = useParams()
   

    
    useEffect(() => {
        const asyncGetFunction = catId ? getProductsByCategory : getProducts 
        asyncGetFunction(catId)
            .then(res => {
                setProducts(res)
            })
    }, [catId]);

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer