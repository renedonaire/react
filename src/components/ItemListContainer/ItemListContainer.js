import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { UIContext } from '../../context/UIContext'
import { ItemList } from '../ItemList/ItemList'
import { getFirestore } from '../../firebase/FirebaseConfig'
import './ItemListContainer.scss'

export const ItemListContainer = () => {
    const { loading, setLoading } = useContext(UIContext)
    const { catId } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        const database = getFirestore()
        const productos = database.collection('productos')

        if (catId) {
            const productosFiltrado = productos.where('category', '==', catId)
            productosFiltrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    setData(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    setData(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [catId, setLoading])

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
