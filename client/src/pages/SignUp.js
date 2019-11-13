import React from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback, FormText, Container } from "reactstrap"

function SignUP() {
    return (
        <Container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Form style={{ backgroundColor: "ivory", width: "50%"}}>
                <h1>Sign UP!</h1>
                <FormGroup>
                    <Label for="email">Email </Label>
                    <Input type="email" name="email" id="email" placeholder="123@abc.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="userName">User Name </Label>
                    <Input valid />
                    <FormFeedback valid style={{color:"green"}}>Sweet! that name is available</FormFeedback>
                    <FormText>Enter a unique User Name!</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password </Label>
                    <Input invalid />
                    <FormFeedback style={{color: "red"}}>Please Enter a valid password</FormFeedback>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}


export default SignUP;