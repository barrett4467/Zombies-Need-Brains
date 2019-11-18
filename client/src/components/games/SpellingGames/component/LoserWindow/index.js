import React, { useState } from 'react';
import { Button, Jumbotron } from "reactstrap"
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
const ZombieDiv = styled.section`
img{
  width:125px;
}
`

const LoserWindow = (props) => {
  console.log(props.playAgain);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <JumboWrapper>
        <Jumbotron className="jumbo">
          <h1 className="display-3">Out of Brains!</h1>
          <p className="lead">Try to do better next time</p>
          <hr className="my-2" />
          <ZombieDiv>
            <img src={`${process.env.PUBLIC_URL}/assets/zombies/paperzombie.png`} alt="zombie"/>             
          </ZombieDiv>         
            <Button>Thanks For Playing</Button>
            <Button onClick={props.playAgain}>Play Again</Button>
         </Jumbotron>
      </JumboWrapper>
    </div>
  );
}

export default LoserWindow;