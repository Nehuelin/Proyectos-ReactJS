import shoppingCartImage from "../../assets/shopping-cart.png";
import "./CartWidget.css"

export default function CartWidget() {

    return(
        <span className="cart-widget">
           <img src={shoppingCartImage} alt="Shopping Cart" />
           <span className="counter">2</span>
        </span>
    )
}