# Entrega Final curso React

deploy en netlify: https://entregafinal-react-coderhouse.netlify.app/

El trabajo consiste en un ecomerce donde se pueden visualizar los diferentes productos de una tienda e interactuar como si se tratase de una compra real.
En mi caso invente un comercio que tuesta café y que vende sus cafés tostados y algunos elementos extra relacionados con el rubro como ser cafeteras y molinos.
En la página se puede elegir ver todos los productos juntos, o filtrarlos por categorías.
Al seleccionar un producto se pueden ver algunos detalles y se puede sumar al carrito la cantidad deseada. Si el producto es café se puede seleccionar diferentes tipos de molienda.
Una vez que se quiera finalizar la compra se puede ir al carrito, revisar los productos seleccionados y seguir al paso siguiente, lo que seria el Checkout.
En el checkout el cliente completa sus datos para el envío y genera una orden que se registra en firestore. Si la operación es exitosa se muestra en la pantalla el código de compra asociado a la orden.

El ecomerce esta construido en React, con Vite como herramienta de compilación. Utiliza una base de datos generada con firebase (firestore)
Se utilizan los hooks useEffect y useState y tambien se crearon algunos customHooks para manejar las funcionalidades de algunos componentes
Se creo un context para poder acceder a el carrito desde diferentes componentes, tambien se creo un context para manejar notificaciones y alertas.
Antes de cargar los productos a la base de datos de firebase se utilizo un documento assyncMock.js para simular la peticion de los productos.

Las imágenes de los productos de la categoría de café estan creadas con la inteligencia artificail de Bing. el resto de las imagenes estan sacadas del catalogo de imágenes de google.

Los estilos estan creados con CSS puro y vinculados a cada componente

Como comentario aparte, a partir del código para generar la orden de compra visto en la clase de firebase 2 desarrolle unas líneas de código para cargar de forma automática los productos a la base de datos. esta en el archivo cargaProdFirestore.js.
El único problema que tiene es que me cargo los productos en un orden que yo no buscaba y eso se ve reflejado en cómo se muestran en el catálogo

Por fuera de la entrega se le agregó el servivcio de autenticación de google que ofrece firebase. Por el momento no tiene ninguna aplicación más allá de mostrar el nombre del usuario logeado

Además de las dependencias requeridas por el curso (react-router-dom, firebase, etc) se utilizo la librería de "pictogrammers" para añadir algunos iconos https://pictogrammers.com/docs/
