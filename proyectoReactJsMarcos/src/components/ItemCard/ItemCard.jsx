import { Link } from 'react-router-dom';

import './ItemCard.css';

export default function ItemCard({item}){
    return(
        <>
            <div className="item-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt={item.title} />
                <p>${item.price}</p>
                <Link to={`/product/${item.id}`}>Ver Detalles</Link>
            </div>
        </>
    )
}