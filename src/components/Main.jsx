import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, Bouquets, Seeds } from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={ < Home/> } />
                <Route exact path="/shop-bouquets" element = { < Bouquets /> } />
                <Route exact path="/shop-seeds" element = { < Seeds /> } />
            </Routes>
        </div>
    )
}

export default Main;