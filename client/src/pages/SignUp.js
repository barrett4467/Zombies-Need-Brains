import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback, FormText, Container } from "reactstrap"

function SignUP() {

    const [newUser, setNewUser] = useState({
        email: "",
        userName: "",
        password: ""
    });

    const { email, userName, password } = newUser

    const handleInputChangeE = event => {
        setNewUser({
          ...newUser,
          email: event.target.value
        })
    }

    const handleInputChangeP = event => {
        setNewUser({
          ...newUser,
          password: event.target.value
        })
    }
    const handleInputChangeU = event => {
        setNewUser({
          ...newUser,
          userName: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        alert("Trying to create account!")
    }

    return (
        <Container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Form style={{ backgroundColor: "ivory", width: "50%"}}>
                <h1>Sign UP!</h1>
                <FormGroup>
                    <Label for="email">Email </Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="123@abc.com"
                        value={email}
                        onChange= {handleInputChangeE} 
                    />
                </FormGroup>
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
                    <FormFeedback valid style={{color:"green"}}>Sweet! that name is available</FormFeedback>
                    <FormText>Enter a unique User Name!</FormText>
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
                    <FormFeedback style={{color: "red"}}>Please Enter a valid password</FormFeedback>
                </FormGroup>
                <Button
                    onClick={handleFormSubmit}
                >Submit</Button>
            </Form>
        </Container>
    )
}


export default SignUP;