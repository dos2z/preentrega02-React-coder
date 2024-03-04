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
        stock: 18,
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
        stock: 15,
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
        stock: 13,
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
        stock: 13,
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
        stock: 9,
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
        stock: 10,
        disponible: "si"
    },
    {
        id: 201,
        category: "cafeteras",
        nombre: "Chemex",
        img: "chemex.jpg",
        precio: 88450,
        descripcion: "Este método permite preparar múltiples tazas de café nítidas, sin sedimentos ni notas amargas y muy buen cuerpo. Su diseño único y atemporal le ganó un lugar en el Museo de Arte Moderno de Nueva York.",
        stock: 8,
        disponible: "si"
    },
    {
        id: 202,
        category: "cafeteras",
        nombre: "Hario V60, kit vidrio",
        img: "setV60.jpg",
        precio: 85320,
        descripcion: "Versátil y atractivo, el Kit V60 te permite realizar hasta 4 tazas de café. El Dripper V60 es el método ideal para tener un control total de la extracción, determinando el cuerpo, la textura y la intensidad de la bebida fina",
        stock: 16,
        disponible: "si"
    },
    {
        id: 203,
        category: "cafeteras",
        nombre: "Aeropress",
        img: "aeropress.jpg",
        precio: 90450,
        descripcion: "La forma más simple de preparar café de calidad en casa o de viaje. Irrompible y facil de llevar a todos lados. Mandamos tu Aeropress a todo el país.",
        stock: 5,
        disponible: "si"
    },
    {
        id: 204,
        category: "cafeteras",
        nombre: "Filtros para cafetera Chemex",
        img: "filtrosChemex.jpg",
        precio: 30450,
        descripcion: "100 filtros de papel para cafetera Chemex",
        stock: 19,
        disponible: "si"
    },
    {
        id: 205,
        category: "cafeteras",
        nombre: "Filtros para caftera V60",
        img: "filtrosV60.jpg",
        precio: 20340,
        descripcion: "100 filtros de papel para cafetera Hario V60",
        stock: 25,
        disponible: "si"
    },
    {
        id: 206,
        category: "cafeteras",
        nombre: "Filtros para Aeropress",
        img: "filtrosAeropress.jpg",
        precio: 90450,
        descripcion: "350 filtros de papel para cafetera Aeropress",
        stock: 32,
        disponible: "si"
    },

    {
        id: 301,
        category: "molinos",
        nombre: "Molino manual Timemore Chesnut C3",
        img: "molinoManual.jpg",
        precio: 90450,
        descripcion: "Molino manual marca Timemore",
        stock: 5,
        disponible: "si"
    },
    {
        id: 302,
        category: "molinos",
        nombre: "Molino Baratza Encore",
        img: "molinoEncore1.jpg",
        precio: 560450,
        descripcion: "Molino eléctrico de la marca Baratza, se logran moliendas finas tipo espresso hasta moliendas gruesas como para Prensa Francesa",
        stock: 5,
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

export const getProductsById = (productId) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(products.find((prod) => prod.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise(res => {
        setTimeout(()=>{
            res(products.filter((prod) => prod.category === category))
        }, 1000)  
    })
}