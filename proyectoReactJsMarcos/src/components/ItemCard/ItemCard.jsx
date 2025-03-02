import { Link } from 'react-router-dom';

import './ItemCard.css';

export default function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <p>${item.price}</p>
      <Link to={`/product/${item.id}`}>Ver Detalles</Link>
    </div>
  );
}