import './ItemListContainer.css';
import { useEffect, useState } from "react";
//import { getProducts, getProductsByCategory } from "../../assyncMock";
import { useParams } from 'React-router-dom';
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

import { db } from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


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

    //Traer productos de firestore

    useEffect(() => {
        setLoading(true)
        const collectionRef = catId
        ? query(collection(db, "products"), where("category", "==", catId) )
        :collection(db, "products")
        getDocs(collectionRef)
            .then((response) => {
                const products = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            })
            .catch((err) => { console.log(err); })
            .finally(() => { setLoading(false) })
    }, [catId]);


    
    if (loading) {

        return <Loading />

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