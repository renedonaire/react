import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'

export const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then(res => {
                setItem(res.find(prod => prod.id === parseInt(itemId)))
            })
            .finally(() => { setLoading(false) })
    }, [itemId])

    return (
        <>
            {loading
                ?
                <Container className="ItemListContainer_spinner">
                    <Row>
                        <Col ><h2>Cargando...</h2></Col>
                        <Col><Spinner animation="grow" variant="danger" /></Col>
                    </Row>
                </Container>
                :
                <ItemDetail {...item} />
            }
        </>
    )
}
