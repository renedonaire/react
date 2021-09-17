import { Link } from 'react-router-dom'
import { Row, Button } from 'react-bootstrap'
import './Counter.scss'

export const Counter = ({ max, cantidad, setCantidad, agregar, agregado }) => {
    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <Row>
            {
                agregado
                    ?
                    <>
                        <Row className="rowCarro">
                            <Button className="btnCarro" variant="light" disabled>-</Button>
                            <p className="cantidadCarro--disabled" >{cantidad}</p>
                            <Button className="btnCarro" variant="light" disabled>+</Button>
                        </Row>
                        <Row className="rowCarro">
                            <Link to="/cart" className="btn btn-outline-dark btnCarroAgregar">Ir al Carro</Link>
                        </Row>
                    </>
                    :
                    max > 0 ?
                        <>
                            <Row className="rowCarro">
                                <Button className="btnCarro" variant="outline-dark" onClick={handleRestar}>-</Button>
                                <p className="cantidadCarro" >{cantidad}</p>
                                <Button className="btnCarro" variant="outline-dark" onClick={handleSumar}>+</Button>
                            </Row>
                            <Row className="rowCarro">
                                <Button className="btnCarroAgregar" variant="outline-dark" onClick={agregar}>Agregar al carro</Button>
                            </Row>
                        </>
                        :
                        <>
                            <Row>
                                <p>Lo sentimos, este producto no tiene stock.</p>
                            </Row>
                        </>
            }
        </Row>
    )
}
