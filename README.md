# Entrega Final curso React

El trabajo consiste en un ecomerce donde se pueden visualizar los diferentes productos de una tienda e interactuar como si se tratase de una compra real.
En mi caso invente un comercio que tuesta café y que vende sus cafés tostados y algunos elementos extra relacionados con el rubro como ser cafeteras y molinos.
En la página se puede elegir ver todos los productos juntos, o filtrarlos por categorías.
Al seleccionar un producto se pueden ver algunos detalles y se puede sumar al carrito la cantidad deseada. Si el producto es café se puede seleccionar diferentes tipos de molienda.
Una vez que se quiera finalizar la compra se puede ir al carrito, revisar los productos seleccionados y seguir al paso siguiente, lo que seria el Checkout.
En el checkout el cliente completa sus datos para el envío y genera una orden que se registra en firestore. Si la operación es exitosa se muestra en la pantalla el código de compra asociado a la orden.

El ecomerce esta construido en React, con Vite como herramienta de compilación y utiliza una base de datos generada con firebase
Se utilizan los hooks useEffect y useState y tambien se crearon algunos customHooks para manejar las funcionalidades de algunos componentes
Se creo un context para poder acceder a el carrito desde diferentes componentes, tambien se creo un context para manejar notificaciones y alertas.
Antes de cargar los productos a la base de datos de firebase se utilizo un documento assyncMock.js para simular la peticion de los productos

Los estilos estan creados con CSS puro y vinculados a cada componente

Como comentario aparte, a partir del código para generar la orden de compra visto en la clase de firebase 2 desarrolle unas líneas de código para cargar de forma automática los productos a la base de datos. esta en el archivo cargaProdFirestore.js.
El únco problema que tiene es que me cargo los productos en un orden que yo no buscaba y eso se ve reflejado en cómo se muestran en el catálogo

Además de las dependencias requeridas por el curso (react-router-dom, firebase, etc) se utilizo la librería de "pictogrammers" para añadir algunos iconos https://pictogrammers.com/docs/
