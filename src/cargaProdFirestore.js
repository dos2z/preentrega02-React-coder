
/* Programita para cargar todos los productos automáticamente */



import { db } from "./services/firebase/index.js"
import { addDoc, collection } from "firebase/firestore"


const products = [
    {
         category: "cafe",
        nombre: "Café de Brasil",
        img: "cafeBrasil.jpg",
        precio250g: 7580,
        precio1Kg: 27560,
        notas: "Chocolate, Avellana, Vainilla",
        variedad: "Bourbon amarillo",
        procesamiento: "natural",
        altura: "1700m",
        region: "Fazenda Ambiental Fortaleza, Serra do Caracol, Sul de Minas",
        stock: 18,
    },
    {
        category: "cafe",
        nombre: "Café de Colombia",
        img: "cafeColombia.jpg",
        precio250g: 9990,
        precio1Kg: 36320,
        notas: "Mandarina, Cacao amargo, Azucar mascabo",
        variedad: "Caturra, Castillo",
        procesamiento: "Lavado",
        altura: "1800m",
        region: "Finca El Diviso, regiòn de Nariño",
        stock: 15,
    },
    {
        category: "cafe",
        nombre: "Café de Guatemala",
        img: "cafeGuatemala.jpg",
        precio250g: 12430,
        precio1Kg: 45200,
        notas: "Frutilla, Té negro, Pasas de uva",
        variedad: "Caturra",
        procesamiento: "natural",
        altura: "1600m",
        region: "Finca Palo Blanco de Ivan Ovalle, Huehuetenango",
        stock: 13,
    },
    {
        category: "cafe",
        nombre: "Café de Perú",
        img: "cafePeru.jpg",
        precio250g: 10780,
        precio1Kg: 39200,
        notas: "Manzana roja, Miel de Caña, Pimienta de Jamaica",
        variedad: "Pache, típica",
        procesamiento: "Honey",
        altura: "1700m",
        region: "Amazonas",
        stock: 13,
    },
    {
        category: "cafe",
        nombre: "Café de Etiopía",
        img: "cafeEtiopia.jpg",
        precio250g: 14580,
        precio1Kg: 53320,
        notas: "Durazno, Jazmìn, Floral",
        variedad: "Bourbon - Typica",
        procesamiento: "Lavado",
        altura: "2000m",
        region: "Guji",
        stock: 9,
    },
    {
        category: "cafe",
        nombre: "Café de Kenia",
        img: "cafeKenia.jpg",
        precio250g: 14930,
        precio1Kg: 54290,
        notas: "Caramelo, chocolate con leche, bayas",
        variedad: "SL28 y SL24",
        procesamiento: "natural",
        altura: "1850m",
        region: "Coperativa de caficultores Aguthi, Nyeri County",
        stock: 10,
    }, 
     {
        category: "cafeteras",
        nombre: "Chemex",
        img: "chemex.jpg",
        precio: 88450,
        stock: 8,
    },
    {
        category: "cafeteras",
        img: "setV60.jpg",
        precio: 85320,
        stock: 16,
    },
    {
        category: "cafeteras",
        nombre: "Aeropress",
        img: "aeropress.jpg",
        precio: 90450,
        stock: 5,
    },
    {
        category: "cafeteras",
        nombre: "Filtros para cafetera Chemex",
        img: "filtrosChemex.jpg",
        precio: 30450,
        descripcion: "100 filtros de papel para cafetera Chemex",
        stock: 19,
    },
    {
        category: "cafeteras",
        nombre: "Filtros para caftera V60",
        img: "filtrosV60.jpg",
        precio: 20340,
        descripcion: "100 filtros de papel para cafetera Hario V60",
        stock: 25,
    },
    {
        category: "cafeteras",
        nombre: "Filtros para Aeropress",
        img: "filtrosAeropress.jpg",
        precio: 90450,
        descripcion: "350 filtros de papel para cafetera Aeropress",
        stock: 32,
    }, 

    {
        category: "molinos",
        nombre: "Molino manual Timemore Chesnut C3",
        img: "molinoManual.jpg",
        precio: 90450,
        descripcion: "Molino manual marca Timemore",
        stock: 5,
    },
    {
        category: "molinos",
        nombre: "Molino Baratza Encore",
        img: "molinoEncore1.jpg",
        precio: 560450,
        descripcion: "Molino eléctrico de la marca Baratza, se logran moliendas finas tipo espresso hasta moliendas gruesas como para Prensa Francesa",
        stock: 5,
    }

]

const agregarProductos = async () => {
    console.log("entrando en la fn"); //antes de agregar este console.log se iba por el catch, no se por que funciono al poner eso
    const productsRef = collection(db, "products")
    for (let prod of products) {
        const productAdd = await addDoc(productsRef, prod)

    }

}

agregarProductos()
    .then(()=>{
        console.log("Productos agregados correctamente");
    })
    .catch((error)=>{
        console.log("Se produjo un error" + error);
    })


