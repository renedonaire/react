// import React, { useEffect, useState } from 'react'
// import { pedirDatos } from '../../helpers/pedirDatos'
// import { ItemList } from '../ItemList/ItemList'
// import { Container, Row, Col, Spinner } from 'react-bootstrap'
// import './ItemListContainer.scss'
// import { useParams } from 'react-router-dom'

// export const ItemListContainer = () => {

//     const { catId } = useParams()
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(false) 

//     useEffect(() => { 
//         setLoading(true)
//         pedirDatos()
//             .then(res => {
//                 if (catId) {
//                     const arrayFiltrado = res.filter( prod => prod.category === catId)
//                     setData( arrayFiltrado )
//                 } else {
//                     setData(res)
//                 }
//             })
//             .catch(err => console.log(err))
//             .finally(()=> {
//                 setLoading(false)
//             })
//     }, [catId])

//     return (
//         <>
//             {loading
//                 ?
//                     <Container className="ItemListContainer_spinner">
//                         <Row>
//                             <Col ><h2>Cargando...</h2></Col>
//                             <Col><Spinner animation="grow" variant="danger" /></Col>
//                         </Row>
//                     </Container>
//                 :
//                 <ItemList catID={catId} productos={data} />
//             }
//         </>
//     )
// }

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    const [data, setData] = useState([])


    // useEffect(()=>{

    //     const mover = (event) => {
    //         console.log(event)
    //         console.log('Mouse moved')
    //     }
    //     window.addEventListener('mousemove', mover)

    //     return ()=>{
    //         window.removeEventListener('mousemove', mover)
    //     }
    // }, [])

    
    useEffect( ()=> {
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
             ? <h2>Cargando...</h2>
             : <ItemList productos={data}/>    
            }
        </>
    )
}
