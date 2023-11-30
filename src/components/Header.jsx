import React, { useState } from "react";
import { headerNav } from "../constants";

const Header = () => {

    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return(
    <header id="header">
    <h1 className="header__logo"><a href="./"><span>julia</span> Portfolio</a></h1>
        <nav className={`header__nav ${show ? "show" : ""}`} aria-label="메인 메뉴">
            <ul>
            {headerNav.map((nav, key) => (
                <li key={key}>
                    <a href={nav.url}>{nav.title}</a>
                </li>
            ))}
            </ul>
        </nav>
        <button type="button" 
        className="header__nav__mo" 
        onClick={toggleMenu}>
            <span></span>
        </button>
    </header>

    );
};
export default Header;