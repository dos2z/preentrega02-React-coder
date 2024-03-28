import { collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "."

export const stockChecker = async (cart) => {
    const ids = cart.map((item) => item.id)
    const productRef = collection(db, "products")
    const productAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids)))
    const { docs } = productAddedFromFirestore;
    const outOfStock = []
    let stockAvailable = false
    const batch = writeBatch(db)
    docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id)
        const productQuantity = productAddedToCart.quantity
        if (productQuantity <= stockDB) {
            batch.update(doc.ref, { stock: stockDB - productQuantity })
        } else {
            outOfStock.push({ id: doc.id, ...dataDoc })
        }
    });
    if (outOfStock.length === 0) {
        await batch.commit();
        stockAvailable = true
    }
    return stockAvailable
}

