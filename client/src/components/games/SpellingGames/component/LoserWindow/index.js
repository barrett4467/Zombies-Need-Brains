import React, { useState } from 'react';
import { Button, Jumbotron } from "reactstrap"
import styled from "styled-components";

const JumboWrapper = styled.section`
.jumbo{
  background:blue;
}
`
const ZombieDiv = styled.section`
img{
  width:125px;
}
`

const LoserWindow = (props) => {

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
            <img src={`${process.env.PUBLIC_URL}/assets/zombies/paperzombie.png`}/>             
          </ZombieDiv>
          <p className="lead">
            <Button>Thanks For Playing</Button>
            <Button onClick={props.playAgain}>Play Again</Button>
          </p>
        </Jumbotron>
      </JumboWrapper>
    </div>
  );
}

export default LoserWindow;