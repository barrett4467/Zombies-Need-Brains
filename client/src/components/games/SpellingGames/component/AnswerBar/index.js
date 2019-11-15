import React, { useState,} from 'react';
import { Button, Form, FormGroup, Input, } from "reactstrap"


const AnswerBar = (props) => {

    return (
        <div>
            <Form onSubmit={props.handleFormSubmit}>
                <FormGroup >
                    <Input 
                    name="text"
                    id="exampleText"
                    onChange={props.handleInputChange}
                     />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default AnswerBar