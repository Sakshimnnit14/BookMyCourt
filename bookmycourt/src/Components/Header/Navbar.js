import React , { useState } from "react";
import { Typography } from '@material-ui/core';
import "./Navbar.css"

const Navbar = () => {

    const [isScrollDown, setIsScrollDown] = useState(false);
    const handleScrollDown = () => {
        if (window.scrollY >= 80) {
          setIsScrollDown(true);
        } 
        else {
          setIsScrollDown(false);
        }
    };

    window.addEventListener("scroll", handleScrollDown);
    return(
        <>
        <div className={`${isScrollDown ? "navbar_scroll" : "navbar"}`}
        onScroll={handleScrollDown}>
            <div className="main-header">
                <Typography variant="h5"> BookMyCourt </Typography>
            </div>
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#"> Register / Login </a></li>
                <li><a href="#"> Our Team </a></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;