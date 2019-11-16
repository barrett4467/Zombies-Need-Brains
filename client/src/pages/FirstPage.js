import React from "react";
import Buttons from "../components/Button"
import { Container } from "reactstrap";



function FirstPage () {
    return (
        <Container style={{textAlign: "center"}}>
            <Buttons
            id="signUpButton"
            destination= "/signup"
            content= "Sign Up!"
            >
            </Buttons>
            <Buttons
            destination= "/login"
            content= "Log In!"
            >
            </Buttons>
        </Container>
    )
}


export default FirstPage;