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
                    <ButtonComponent text="Interactivas"/>
                    <ButtonComponent text="EDM"/>
                    <ButtonComponent text="Remixes"/>
                    <ButtonComponent text="Albumes"/>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
}