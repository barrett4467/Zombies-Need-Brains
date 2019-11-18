import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input, } from "reactstrap"

const Status = styled.header`
.statsBar{
    margin:auto;
    display:flex;
    text-align:center;
    padding:0
    
}
    p{
        padding:1em;
    }
    `
  
const StatsBar = (props) => {

    return (
        <div>
            <Status>
                <div className="statsBar">
                    <p>Round: {props.round}</p>
                    <p>Lives: {props.lives} </p>
                    <p>Score: {props.score} </p>
                </div>
            </Status>
        </div>
    )
}

export default StatsBar