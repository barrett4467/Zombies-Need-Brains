import React from "react";
import "./style.css";
import WalkingZombie from "../WalkingZombie/";


const Header = () => {
    return (
        <header className="header">
            <h1>Welcome!</h1>
            <WalkingZombie></WalkingZombie>    
        </header>
    )
}

export default Header