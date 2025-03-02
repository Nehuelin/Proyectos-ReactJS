import { Link } from "react-router-dom";

import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CartWidget from "../CartWidget/CartWidget";

import logo from "../../assets/logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo-image" src={logo} alt="Home" />
      </Link>
      <div className="navbar__buttons">
        <ButtonComponent text="Apple" linkTo="/category/apple" />
        <ButtonComponent text="Samsung" linkTo="/category/samsung" />
        <ButtonComponent text="Motorola" linkTo="/category/motorola" />
        <ButtonComponent text="Otros" linkTo="/category/otros" />
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
}