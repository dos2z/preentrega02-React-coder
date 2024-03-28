import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { useParams } from 'React-router-dom';
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getProducts } from '../../services/firebase/firebase';
import { useAsync } from '../../hooks/useAsync';


const ItemListContainer = ({ greeting }) => {
    //const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState(greeting)
    //const [loading, setLoading] = useState(true)
    const { catId } = useParams()


    //codigo para cambiar titulos por la categoria
    useEffect(() => {
        catId ? setTitulo(catId.replace(catId[0], catId[0].toUpperCase())) : setTitulo(greeting)

    }, [catId])

    useEffect(() => {
        document.title = `Phoenix Coffee Roasters | ${catId ?? ''}`
    }, [catId])

    //Traer productos de firestore
    const getProductFromFirestore = ()=> getProducts(catId);

    const {data, error, loading} = useAsync(getProductFromFirestore, [catId])

    
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <h1>Hubo un error</h1>
    }

    return (
        <>
            <h2 className="ItemListContainer__h2">{titulo}</h2>
            <div className="itemListContainer">
                <ItemList products={data} />
            </div>
        </>


    )
}

export default ItemListContainer