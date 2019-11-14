import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback, Container } from "reactstrap"
import API from "../utils/API";

const LogIn = () => {
    const [user, setUser] = useState({
        userName: "",
        password: "", 
        isValid: true,
        userExist: true
    });

    const { userName, password, isValid, userExist } = user

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
        if(userName && password){
            console.log(userName)
            API.findUser({
                username: userName
            })
                .then( res => {
                    if (res.data.password === password ){
                        window.location.replace("/home");
                    } else {
                        setUser({
                            ...user,
                            userExist: true,
                            password: "",
                            isValid: false
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    setUser({
                        ...user,
                        userExist: false
                    });                    
                });
        };
    };



    return (
        <Container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Form style={{ backgroundColor: "ivory", width: "50%" }}>
                <h1>Log In!</h1>
                <FormGroup>
                    <Label for="userName">User Name </Label>
                    {userExist ? 
                    <Input 
                        type="userName" 
                        name="user" 
                        id="userName" 
                        placeholder="User Name Here!" 
                        value={userName}
                        onChange= {handleInputChangeU} 
                        />
                        :
                        <Input 
                        type="userName" 
                        name="user" 
                        id="userName" 
                        placeholder="User Name Here!" 
                        value={userName}
                        onChange= {handleInputChangeU}
                        invalid 
                        />
                }
                    <FormFeedback style={{color: "red"}}>User Name Does Not Exist</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password </Label>
                    {isValid === false ? 
                    (<Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={handleInputChangeP} 
                        invalid                       
                        />)
                        :
                        (<Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={handleInputChangeP} 
                                               
                        />)}

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