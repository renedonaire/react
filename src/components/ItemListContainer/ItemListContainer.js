import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { UIContext } from '../../context/UIContext'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.scss'

export const ItemListContainer = () => {
    const { loading, setLoading } = useContext(UIContext)
    const { catId } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then(res => {
                if (catId) {
                    const arrayFiltrado = res.filter(prod => prod.category === catId)
                    setData(arrayFiltrado)
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

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
                <ItemList catID={catId} productos={data} />
            }
        </>
    )
}
