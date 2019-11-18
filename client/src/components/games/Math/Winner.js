import React from 'react';
import { Button, Jumbotron } from "reactstrap"
import { BrowserRouter as Link } from "react-router-dom"


import styled from "styled-components";

const JumboWrapper = styled.section`
.jumbo{
  background:rgb(74, 18, 79);
  color:#CFD615
}
Button{
  border:4px solid #29A506;
}
`


const Winner = (props) => {
console.log(props);
const returnBadges = () => window.location = "/badges";
  return (
    <JumboWrapper>
      <Jumbotron className="jumbo">
        <h1 className="display-3">Hello, User!</h1>
        <p>You Did Great!</p>
        <hr className="my-2" />
        <Button onClick={returnBadges}>Thanks For Playing</Button> 
        <Button onClick={props.playAgain}>Play Again</Button>     
    
      </Jumbotron>
    </JumboWrapper>
  );
}

export default Winner;
