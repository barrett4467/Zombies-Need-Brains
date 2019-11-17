import React, { useState, } from 'react';
import { Button, Form, FormGroup, Input, } from "reactstrap"
import styled from "styled-components";
const AnswerBox = styled.section`
Button{
border:3px solid #29A506;
color:#CFD615;
padding:1em 1.25em;
}
#answerbtn{
    background:rgb(74, 18, 79,);
}
`

const AnswerBar = (props) => {

    return (
        <AnswerBox>
            <Form onSubmit={props.handleFormSubmit}>
                <FormGroup >
                    <Input
                        name="text"
                        id="answerBox"
                        onChange={props.handleInputChange}
                        autoComplete="off"                        
                                    />
                </FormGroup>
                <Button id="answerbtn" type="submit">Submit</Button>
            </Form>
        </AnswerBox>
    )
}

export default AnswerBar