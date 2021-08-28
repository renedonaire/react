import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const { catId } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect(() => { 
        setLoading(true)
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
                ?
                    <Container className="ItemListContainer_spinner">
                        <Row>
                            <Col ><h2>Cargando...</h2></Col>
                            <Col><Spinner animation="grow" variant="dark" /></Col>
                        </Row>
                    </Container>
                :
                    <ItemList productos={data} />
            }
        </>
    )
}
