import React, { useState } from 'react';
import { Button, Jumbotron } from "reactstrap"

const WinnerWindow = (props) => {
 let placeImg=""
  switch (props.score) {
    case 10: placeImg= "{`${process.env.PUBLIC_URL}/assets/zombies/medal1.png`}" ;             

      break;
    case 9:  placeImg= "{`${process.env.PUBLIC_URL}/assets/zombies/medal2.png`}" ;  
      break;
    default: placeImg= "{`${process.env.PUBLIC_URL}/assets/zombies/medal3.png`}" ;   
  }
console.log(placeImg)
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, User!</h1>
        <p className="lead">You Did Great!</p>
        <hr className="my-2" />
        <p>You Got {props.score} correct and saved {props.score} people by returning their brains! .</p>
        <img src= {placeImg} alt="place img"/>
        <p className="lead">
          <Button color="primary">Thanks For Playing</Button>
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/zombies/paperzombie.png`} alt="zombie"/>         
      </Jumbotron>

    </div>
  );
}

export default WinnerWindow;
