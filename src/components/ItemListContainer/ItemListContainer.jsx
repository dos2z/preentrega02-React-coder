import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../assyncMock";
import { useParams } from 'React-router-dom'
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState(greeting)

    const { catId } = useParams()

    

    useEffect(()=>{
        catId?setTitulo(catId.replace(catId[0], catId[0].toUpperCase())):setTitulo(greeting)
    }, [catId])

    
    
   

    
    useEffect(() => {
        const asyncGetFunction = catId ? getProductsByCategory : getProducts 
        asyncGetFunction(catId)
            .then(res => {
                setProducts(res)
            })
    }, [catId]);

    return (
        <>
            <h2>{titulo}</h2>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer