import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import './Counter.scss'

export const Counter = ({ max, cantidad, setCantidad, agregar, agregado }) => {
    console.log(agregado)

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
                    <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                    :
                    <div>
                        <Col><Button variant="outline-dark" onClick={handleRestar}>-</Button></Col>
                        <Col><p>{cantidad}</p></Col>
                        <Col><Button variant="outline-dark" onClick={handleSumar}>+</Button></Col>
                        <Button variant="outline-dark" onClick={agregar}>Agregar al carro</Button>
                    </div>
            }
        </Row>
    )
}
