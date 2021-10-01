import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/FirebaseConfig'


export const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(UIContext)

    useEffect(() => {
        setLoading(true)
        const database = getFirestore()
        const productos = database.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({ ...doc.data(), id: doc.id })
            })
            .finally(() => { setLoading(false) })
    }, [itemId, setLoading])


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
