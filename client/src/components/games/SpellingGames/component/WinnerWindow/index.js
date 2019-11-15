import React, { useState } from 'react';
import { Button, Jumbotron } from "reactstrap"

const WinnerWindow = (props) => {
 

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, User!</h1>
        <p className="lead">Yod Did Great!</p>
        <hr className="my-2" />
        <p>You Got {props.score} correct and save {props.score} people by returning their brains! .</p>
        <p className="lead">
          <Button color="primary">Thanks For Playing</Button>
        </p>
      </Jumbotron>

    </div>
  );
}

export default WinnerWindow;