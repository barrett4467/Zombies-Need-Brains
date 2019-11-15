import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import NavDrop from "../DropDown";

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <h1><Link to="/home">Zombies Need Brains</Link></h1>
                <ul>
                    <NavDrop>
                        <li>
                            <Link to="/math">Math</Link>
                        </li>
                        <li>
                            <Link to="/spelling">Spelling</Link>
                        </li>
                        <li>
                            <Link to="/badges">Badges</Link>
                        </li>              
                    </NavDrop>
                </ul>
            </nav>
        </>
    )

}



export default NavBar;