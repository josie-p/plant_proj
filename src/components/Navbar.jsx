import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <h2>josie's flowers.</h2>
            <Link to="/">home</Link>
            <Link to="/shop-bouquets">shop bouquets</Link>
            <Link to="/shop-seeds">shop seeds</Link>
        </nav>
    )
}

export default Navbar;