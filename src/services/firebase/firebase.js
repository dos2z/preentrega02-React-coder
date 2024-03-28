import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "."


export const getProducts = (catId) =>{
    const collectionRef = !catId
    ?collection(db, "products")
    :query(collection(db, "products"), where("category", "==", catId))
    return getDocs(collectionRef)
    .then((response)=>{
        const products = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });
        return products;
    })
    .catch((err) => {
        return err;
    })
}