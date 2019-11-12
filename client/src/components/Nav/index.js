import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Example from "../DropDown";

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <h1><Link to="/home">Zombies Need Brains</Link></h1>
                <ul>
                    <Example>
                        <li>
                            <Link to="/math">Math</Link>
                        </li>
                        <li>
                            <Link to="/spelling">Spelling</Link>
                        </li>
                        <li>
                            <Link to="/badges">Badges</Link>
                        </li>              
                    </Example>
                </ul>
            </nav>
        </>
    )

}



export default NavBar;