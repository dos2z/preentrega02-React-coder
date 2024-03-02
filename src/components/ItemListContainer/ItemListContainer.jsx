import { useEffect, useState } from "react";
import { getProducts } from "../../assyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
            })
    }, []);

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer