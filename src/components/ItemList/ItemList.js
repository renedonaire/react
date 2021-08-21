import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ({productos = []}) => {
    
    return (
        <section className="container">
            <h2>Libros</h2>
            <hr />
            <div className="row">
                {productos.map((producto) => <Item key={producto.id} {...producto}/>)}
            </div>
        </section>
    )
}
