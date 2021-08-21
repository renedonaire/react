import React, { useEffect, useState } from 'react';
import "../styles/styles.css"; //Estilos para el título
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])


    return (
        <>
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={data} />
            }
        </>
    )
}
