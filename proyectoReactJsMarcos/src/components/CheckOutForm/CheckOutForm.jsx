import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { sendOrder } from "../../firebase/firebase";
import "./CheckOutForm.css";

export default function CheckOutForm() {
  const [cart, , , , clearCart] = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer: { name, phone, email },
      items: cart,
      total: totalPrice,
    };
    try {
      const orderId = await sendOrder(order);
      setOrderId(orderId);
      clearCart();
    } catch (error) {
      console.error("Error generating order:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="loading-message">Generando orden...</p>;
  }

  if (orderId) {
    return <p className="order-id-message">Orden generada exitosamente! El ID de su orden es: {orderId}</p>;
  }

  return (
    <div className="checkout-form-container">
      <h2>Resumen de Compra</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}