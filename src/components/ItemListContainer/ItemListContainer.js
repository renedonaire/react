import React from 'react';
import "../styles/styles.css"; //Estilos para el título

export const ItemListContainer = ({ saludo }) => {
    // Retorna un título H1 con la clase "saludo" que se importó
    return (
        <div>
            <h1 class="saludo">{saludo}</h1>
        </div>
    )
};
