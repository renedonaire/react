import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos'; // Importa la función para traer los productos desde json de 'stock'
import { ItemList } from '../ItemList/ItemList'; // Importa el componente
import { Container, Row, Col, Spinner } from 'react-bootstrap'; // Importa componentes utilizados desde botstrap
import './ItemListContainer.scss'; // Importa estilos
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const { catId } = useParams()

    const [data, setData] = useState([]) // Hook de estado, inicia con array vacío
    const [loading, setLoading] = useState(false) // Hook de estado, inicia con el valor 'false'

    useEffect(() => { // Hook de efecto, se realiza al montar
        // Ajuste el estado 'cargando'  a verdadero...
        setLoading(true)
        // ...mientras llega la respuesta con los datos...
        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.category === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {loading
                ? // Si 'loading' es verdadero, muestra el spinner
                    <Container className="ItemListContainer_spinner">
                        <Row>
                            <Col ><h2>Cargando...</h2></Col>
                            <Col><Spinner animation="grow" variant="dark" /></Col>
                        </Row>
                    </Container>
                : // Si 'loading 'no es verdadero, pasa la data al componente ItemList
                    <ItemList productos={data} />
            }
        </>
    )
};
