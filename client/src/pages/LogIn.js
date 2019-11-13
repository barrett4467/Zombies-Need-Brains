import React from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback, Container } from "reactstrap"

function LogIn () {
    return (
        <Container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Form style={{ backgroundColor: "ivory", width: "50%" }}>
                <h1>Log In!</h1>
                <FormGroup>
                    <Label for="userName">User Name </Label>
                    <Input type="userName" name="user" id="userName" placeholder="User Name Here!" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password </Label>
                    <Input invalid />
                    <FormFeedback style={{color: "red"}}>Please enter your valid password</FormFeedback>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default LogIn;