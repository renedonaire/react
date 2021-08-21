import React from 'react';
import { Item } from '../Item/Item'; // Importa el componente 'item' unitario
import './ItemList.scss'; // Importa los estilos

export const ItemList = ({ productos = [] }) => {

    return (
        // Retorna un elemento 'container' con tantos productos como haya en 'stock'
        // Usando el método 'map'  sobre el array de datos que entrega la función promesa 'pedirDatos' (helpers)
        <section className="container">
            <h2 className="itemList_title">¡Recién llegados!</h2>
            <div className="row">
                {productos.map((producto) => <Item key={producto.id} {...producto} />)}
            </div>
        </section>
    )
};
