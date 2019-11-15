import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, } from "reactstrap"


const StatsBar = (props) => {

    return (
        <div>
            <div className="questionBox">
                <p>Round: {props.round}</p>
                <p>Lives: {props.lives} </p>
                <p>Score: {props.score} </p>
            </div>
        </div>
    )
}

export default StatsBar