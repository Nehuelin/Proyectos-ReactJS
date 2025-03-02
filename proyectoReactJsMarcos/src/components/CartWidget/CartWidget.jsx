import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import shoppingCartImage from "../../assets/shopping-cart.png";
import "./CartWidget.css"

export default function CartWidget() {

    const [cart, setCart] = useContext(CartContext);

    return(
        <span className="cart-widget">
           <img src={shoppingCartImage} alt="Shopping Cart" />
           <span className="counter">{cart.length}</span>
        </span>
    )
} 