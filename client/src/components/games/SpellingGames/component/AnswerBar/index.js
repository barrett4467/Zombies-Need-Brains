import React, { useState,} from 'react';
import { Button, Form, FormGroup, Input, } from "reactstrap"


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