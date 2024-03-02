const products = [
    {
        id: 101,
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
        disponible: "si"
    },
    {
        id: 102,
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
        disponible: "si"
    },
    {
        id: 103,
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
        disponible: "si"
    },
    {
        id: 104,
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
        disponible: "si"
    },
    {
        id: 105,
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
        disponible: "si"
    },
    {
        id: 106,
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
        disponible: "si"
    }
]






export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}