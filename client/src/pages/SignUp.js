import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback, FormText, Container } from "reactstrap"
import API from "../utils/API";
function SignUP() {

    const [newUser, setNewUser] = useState({
        email: "",
        userName: "",
        password: "",
        failPass: false,
        failEmail: false,
        failUser: false
    });

    const { email, userName, password, failUser, failPass, failEmail } = newUser

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
        if (email && password && userName) {
            API.createUser({
                email,
                username: userName,
                password
            })
                .then(res => {
                    console.log(res);
                    if (res.data.errmsg) {
                        setNewUser({
                            ...newUser,
                            failUser: true,
                            failEmail:false,
                            failPass: false
                        });
                    } else if (res.data.name === "ValidationError") {
                        if(res.data.errors.email){
                            setNewUser({
                                ...newUser,
                                failEmail: true
                            });
                        }
                        else if (res.data.errors.password) {
                            setNewUser({
                                ...newUser,
                                failPass: true,
                                failEmail: false
                            });
                        }                         
                    } else {
                        window.location.replace("/home")
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <Container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Form style={{ backgroundColor: "ivory", width: "50%" }}>
                <h1>Sign UP!</h1>
                <FormGroup>
                    <Label for="email">Email </Label>
                    {failEmail ?
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="123@abc.com"
                            value={email}
                            onChange={handleInputChangeE}
                            invalid
                        />
                        :
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="123@abc.com"
                            value={email}
                            onChange={handleInputChangeE}

                        />
                    }
                    <FormFeedback style={{ color: "red" }}>Please Enter a valid email address</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="userName">User Name </Label>
                    {!failUser ?
                        <Input
                            type="userName"
                            name="user"
                            id="userName"
                            placeholder="User Name Here!"
                            value={userName}
                            onChange={handleInputChangeU}
                        />
                        :
                        <Input
                            type="userName"
                            name="user"
                            id="userName"
                            placeholder="User Name Here!"
                            value={userName}
                            onChange={handleInputChangeU}
                            invalid
                        />
                    }
                    <FormFeedback style={{ color: "red" }}>That user name is taken</FormFeedback>
                    <FormText>Enter a unique User Name!</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password </Label>
                    {!failPass ?
                        <Input
                            type="password"
                            name="user"
                            id="password"
                            value={password}
                            onChange={handleInputChangeP}
                        />
                        :
                        <Input
                            type="password"
                            name="user"
                            id="password"
                            value={password}
                            onChange={handleInputChangeP}
                            invalid
                        />
                    }

                    <FormFeedback style={{ color: "red" }}>Please Enter a valid password longer than 5 characters</FormFeedback>
                    <FormText>Enter a strong password more than 5 characters!</FormText>
                </FormGroup>
                <Button
                    onClick={handleFormSubmit}
                >Submit</Button>
            </Form>
        </Container>
    )
}


export default SignUP;