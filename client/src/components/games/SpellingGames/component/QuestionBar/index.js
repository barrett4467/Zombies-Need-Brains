import React, { useState} from 'react';
import styled from "styled-components";
const ImgWrapper= styled.section`
img{
    width:250px;
}
`


const QuestionBar = (props) => {

    return (
        <div>
            <div className="questionBox">                
                <ImgWrapper>
                    <img src={`${process.env.PUBLIC_URL}/${props.image}`} />                
                </ImgWrapper>
                <h2>{props.question}</h2>
            </div>            
        </div>
        
    )
}
export default QuestionBar