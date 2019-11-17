import React, { useState } from 'react';
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


const WinnerWindow = (props) => {

  return (
    <JumboWrapper>
      <Jumbotron className="jumbo">
        <h1 className="display-3">Hello, User!</h1>
        <p>You Did Great!</p>
        <hr className="my-2" />
        <p>You Got {props.score} correct and saved {props.score} people by returning their brains! .</p>
       
            <Button><Link to="/badges">Thanks for Playing</Link></Button>        
    
      </Jumbotron>
    </JumboWrapper>
  );
}

export default WinnerWindow;
