import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './ItemListContainer.scss';

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
                ?
                <Container className="ItemListContainer_spinner">
                    <Row>
                        <Col ><h2>Cargando...</h2></Col>
                        <Col><Spinner animation="grow" variant="dark" /></Col>
                    </Row>
                </Container>

                : <ItemList productos={data} />
            }
        </>
    )
}
