# Entrega Final curso React

El trabajo consiste en un ecomerce donde se pueden visualizar los diferentes productos de una tienda.
En mi caso invente un comercio que tuesta café y que vende sus cafés tostados y algunos elementos extra como ser cafeteras y molinos
En la página se puede elegir si ver todos los productos juntos, o filtrarlos por categorías.
Al seleccionar un producto se pueden ver algunos detalles y se puede sumar al carrito la cantidad deseada.
Una vez que se quiera finalizar la compra se puede ir al carrito, revisar los productos seleccionados y seguir al paso siguiente, lo que seria el Checkout.
en el checkout el cliente completa sus datos para el envío y genera una orden que se registra en firestore.

El ecomerce esta construido en React y utiliza una base de datos generada con firebase

Los estilos estan creados con CSS puro y vinculados a cada componente

Como comentario aparte, a partir del código para generar la orden de compra visto en la clase de firebase 2 desarrolle unas líneas de código para cargar de forma automática los productos a la base de datos. esta en el archivo cargaProdFirestore.js.
El únco problema que tiene es que me cargo los productos en un orden que yo no buscaba y eso se ve reflejado en cómo se muestran en el catálogo
