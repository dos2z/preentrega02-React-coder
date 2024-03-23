import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../assyncMock";
import { useParams } from 'React-router-dom';
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState(greeting)
    const [loading, setLoading] = useState(true)




    const { catId } = useParams()


    //codigo para cambiar titulos por la categoria
    useEffect(() => {
        catId ? setTitulo(catId.replace(catId[0], catId[0].toUpperCase())) : setTitulo(greeting)

    }, [catId])

    useEffect(() => {
        document.title = `Phoenix Coffee Roasters | ${catId ?? ''}`
    }, [catId])

    //codigo para traer los produtos del asyncMok    
    useEffect(() => {
        setLoading(true)
        const asyncGetFunction = catId ? getProductsByCategory : getProducts
        asyncGetFunction(catId)
            .then(res => {
                setProducts(res)
            })
            .catch((err) => { console.log(err); })
            .finally(()=>{setLoading(false)})
    }, [catId]);

    if (loading) {
        
        return  <Loading />
                
    }

    return (
        <>
            <h2 className="ItemListContainer__h2">{titulo}</h2>
            <div className="itemListContainer">
                <ItemList products={products} />
            </div>
        </>


    )
}

export default ItemListContainer