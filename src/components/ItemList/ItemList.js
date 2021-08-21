import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.scss';

export const ItemList = ({productos = []}) => {
    
    return (
        <section className="container">
            <h2 className="itemList_title">¡Recién llegados!</h2>
            <div className="row">
                {productos.map((producto) => <Item key={producto.id} {...producto}/>)}
            </div>
        </section>
    )
}
