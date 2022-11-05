import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Footer } from "components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
            </header>
            <Outlet/>
            <Footer/>
        </>
    )    
}

export { Layout };