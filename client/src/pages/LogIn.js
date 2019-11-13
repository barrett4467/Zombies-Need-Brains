import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback, Container } from "reactstrap"

const LogIn = () => {
    const [user, setUser] = useState({
        userName: "",
        password: ""
    });

    const { userName, password } = user

    const handleInputChangeP = event => {
        setUser({
          ...user,
          password: event.target.value
        })
    }
    const handleInputChangeU = event => {
        setUser({
          ...user,
          userName: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        alert("Trying to log in!")
    }



    return (
        <Container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Form style={{ backgroundColor: "ivory", width: "50%" }}>
                <h1>Log In!</h1>
                <FormGroup>
                    <Label for="userName">User Name </Label>
                    <Input 
                        type="userName" 
                        name="user" 
                        id="userName" 
                        placeholder="User Name Here!" 
                        value={userName}
                        onChange= {handleInputChangeU} 
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password </Label>
                    <Input 
                        type="password" 
                        name="user" 
                        id="userName" 
                        value={password}
                        onChange={handleInputChangeP}
                        />
                    <FormFeedback style={{color: "red"}}>Please enter your valid password</FormFeedback>
                </FormGroup>
                <Button
                    onClick={handleFormSubmit}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default LogIn;