import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

export default function Cart() {
  const [cart, , , removeItem, clearCart] = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} index={index} removeItem={removeItem} />
            ))}
          </ul>
          <button className="clear-button" onClick={clearCart}>Vaciar Carrito</button>
          <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceder al Pago</button>
        </>
      )}
    </div>
  );
}