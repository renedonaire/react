// import React from 'react'
// import { Row, Col } from 'react-bootstrap'
// import './Item.scss'
// import { Link } from 'react-router-dom'

// export const Item = ({ id, title, description, price, pictureUrl }) => {
//     return (
//         <div id={id} className="card col-4">
//             <h3 className='item_title' >{title}</h3>
//             <Row className = "item_row">
//                 <Col><img className='item_image' src={pictureUrl} alt={title} /></Col>
//                 <Col><p className='item_description'>{description}</p></Col>
//             </Row>
//             <Row>
//                 <Col className = 'item_col'><Link to={`/detail/${id}`} className="btn btn-outline-dark">Ver más</Link></Col>
//                 <Col className = "item_col"><p className='item_price'>${price}</p></Col>
//             </Row>
//         </div>
//     )
// };

import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {img, nombre, desc, precio, id} ) => {


    return (
        <div className="card col-4 m-2">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <p>{precio}</p>
            <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}
