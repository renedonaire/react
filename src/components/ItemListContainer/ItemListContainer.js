import React from 'react';
import "../styles/styles.css";

export const ItemListContainer = ( {saludo} ) => {
    return (
        <div>
            <h1 class="saludo">{saludo}</h1>
        </div>
    )
}
