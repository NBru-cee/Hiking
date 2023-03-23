import Logo from "../../assets/logo.png";

import React from "react";
import NavLinks from "./NavLinks";

const Nav = () => {
    return (
        <nav className="flex justify-between">
            <img src={Logo} alt="logo" className="h-8 cursor-pointer"/>
            <ul className="md:flex hidden items-center gap-10">
                <NavLinks />
            </ul>
        </nav>
    );
};

export default Nav;
