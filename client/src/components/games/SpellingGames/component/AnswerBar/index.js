import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, } from "reactstrap"


const AnswerBar = (props) => {

    return (
        <div>
            <Form>
                <FormGroup>
                    <Input 
                    name="text"
                    id="exampleText"
                    onChange={props.handleInputChange} />
                </FormGroup>
                <Button onClick={props.handleFormSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default AnswerBar