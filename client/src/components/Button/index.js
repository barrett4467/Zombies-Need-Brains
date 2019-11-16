import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Buttons (props) {
    return(
        <Link
            to={`${props.destination}`}            
        >
            <button
            id={props.id}
            >       
                {props.content} 
            </button>
        </Link>
    )
}

export default Buttons;