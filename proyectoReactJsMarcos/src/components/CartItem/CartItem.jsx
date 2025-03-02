import "./CartItem.css";

export default function CartItem({ item, index, removeItem }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="details">
        <h3>{item.title}</h3>
        <p className="price">Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p className="price">Precio TOTAL: ${item.price * item.quantity}</p>
      </div>
      <button className="remove-button" onClick={() => removeItem(index)}>🗑️</button>
    </li>
  );
}


/* PROTEJER LAS KEYS DE FIREBASE */