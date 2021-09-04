import { Link } from 'react-router-dom'
import { Row, Button } from 'react-bootstrap'
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
                    <>
                        <Row className="rowCarro">
                        <Button className="btnCarro" variant="outline-dark" onClick={handleRestar}>-</Button>
                        <p className="btnCarro" >{cantidad}</p>
                        <Button className="btnCarro" variant="outline-dark" onClick={handleSumar}>+</Button>
                        </Row>

                        <Row className="rowCarro">
                        <Button className="btnCarroAgregar" variant="outline-dark" onClick={agregar}>Agregar al carro</Button>
                        </Row>
                    </>
            }
        </Row>
    )
}
