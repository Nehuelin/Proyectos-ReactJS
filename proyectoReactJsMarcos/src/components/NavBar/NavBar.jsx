import ButtonComponent from "../ButtonComponent/ButtonComponent"
import CartWidget from "../CartWidget/CartWidget"

import logo from "../../assets/logo.png"
import "./NavBar.css"

export default function NavBar(){

    return(
        <>
            <nav className="navbar">
                <img className="logo-image" src={logo} alt="Home" />
                <div className="navbar__buttons">
                    <ButtonComponent text="Interactivas" linkTo="/Home"/>
                    <ButtonComponent text="EDM" linkTo="/"/>
                    <ButtonComponent text="Remixes" linkTo="/"/>
                    <ButtonComponent text="Albumes" linkTo="/"/>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
}