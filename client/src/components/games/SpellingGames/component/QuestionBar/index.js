import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, } from "reactstrap"


const GameWrapper = (props) => {

    return (
        <div>
            <div className="questionBox">
                <p>Image</p>
                <h2>{props.question}</h2>
                 <p>{props.x}</p>
            </div>            
        </div>
    )
}
export default GameWrapper