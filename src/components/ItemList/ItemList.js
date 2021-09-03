// import React from 'react'
// import { Item } from '../Item/Item'
// import './ItemList.scss'
// import { useParams } from 'react-router-dom'


// export const ItemList = ({ cat, productos = [] }) => {
//     const { catId } = useParams()
//     let title = ""
//     if (catId === "novedades") {
//         title = "Novedades de este Mes"
//     } else if (catId === "ficcion") {
//         title = "Ficción"
//     }

//     return (
//         <section className="container">
//             <h2 className="itemList_title">{title}</h2>
//             <div className="row">
//                 {productos.map((producto) => <Item key={producto.id} {...producto} />)}
//             </div>
//         </section>
//     )
// }

import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {


    return (
        <section className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <div className="row">

                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}

            </div>
        </section>
    )
}
