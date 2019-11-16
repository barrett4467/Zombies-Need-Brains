import React from "react";
import "./style.css";
import WalkingZombie from "../WalkingZombie/";


const Header = () => {
    return (
        <header className="header">
            <WalkingZombie location={window.location.href}></WalkingZombie>    
        </header>
    )
}

export default Header