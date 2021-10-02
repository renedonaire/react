# Black Dog
Es un e-commerce dedicado a la venta de libros y productos relacionados (artículos de escritura, e-books descargables).
Actualmente tiene:
- Una vista general de productos ("home")
- Una vista de productos filtrada por categoría, con un menú desplegable
- Una vista de detalle de un producto
- Un carro de compras con resumen de la compra
- Un formulario de checkout con validación de los campos.

Los productos son recuperados desde una base de datos de Firebase. 
También al finalizar el proceso de compra se generan las Ordenes en otra colección de la base de datos.

Se encuentra en desarrollo:
- Aplicar características de Bootstrap para que el diseño sea adaptativo.


## Cómo instalar
Una vez clonado el repositorio, desde la raíz del proyecto ejecutar
- npm install

Y para ejecutar el código, usar
- npm start

El proyecto estará disponible en la dirección http://localhost:3000


## Dependencias que usa
El proyecto usa estas dependencias:
- "normalize.css" para uniformar los estilos por defecto entre distintos navegadores [Normalize](https://necolas.github.io/normalize.css/)
- "react-bootstrap" para estilos de componentes, como la barra de navegación [React Bootstrap](https://react-bootstrap.github.io/)
- "react-router-dom" para manejar las rutas de navegación [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- "firebase" para conectarse a la base de datos [Firebase](https://firebase.google.com/)
- "sweet alert 2" para generar alertas [SweetAlert](https://sweetalert2.github.io/)


## En funcionamiento
Link a archivo .gif que muestra el funcionamiento:
[Proceso de compra](https://github.com/renedonaire/gifs/blob/main/BlackDogFinal.gif)


### Autor
René Donaire
Comisión 16930 - CoderHouse