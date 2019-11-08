import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <>
            <nav className="navbar">
                <h1><Link to="/">Zombies Need Brains</Link></h1>
                <ul>
                    <li>
                        <Link to="/math">Math</Link>
                    </li>
                    <li>
                        <Link to="/spelling">Spelling</Link>
                    </li>
                    <li>
                        <Link to="/badges">Badges</Link>
                    </li>
                </ul>
            </nav>         
        </> 
    )
    
}



export default NavBar;