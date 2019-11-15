import React, { useState, useEffect } from 'react';

const QuestionBar = (props) => {

    return (
        <div>
            <div className="questionBox">                
                <h2>{props.question}</h2>
                <img src={`${process.env.PUBLIC_URL}/${props.image}`} />
                {/* <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} /> */}
            </div>            
        </div>
    )
}
export default QuestionBar