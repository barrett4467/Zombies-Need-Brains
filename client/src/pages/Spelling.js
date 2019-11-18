import React, { useState } from 'react';
import { Button, } from "reactstrap"
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from "react-router-dom"
import styled from "styled-components";
import GameWrapper from "../components/games/SpellingGames/GameWrapper"
import GameWrapper2 from "../components/games/SpellingGames/GameWrapper2"
import GameWrapper3 from "../components/games/SpellingGames/GameWrapper3"


const PageWrapper = styled.section`
display:grid;
grid-template-columns:150px 1fr;
margin-top:2em;   
.bb{grid-column-start:0;
}
.gameArea{
    grid-column-start:2
}
`


const ButtonBar = styled.section`
img{
    display:block;
    width:75px;    
    margin-left:2em
    margin-top:.75em;
}
button{
    margin: 1%;
    padding: 20px;
    font-size: 1em;
    border:4px solid #29A506;  
}
a{
    color: white;
}
`

const Spelling = () => {
    return (
        <>
            <PageWrapper>
                <Router>
                    <>
                        <ButtonBar className="bb">
                            <img src={`${process.env.PUBLIC_URL}/assets/zombies/iceskates.png`} />
                            <Button>
                                <Link to="/gamewrapper">Spell The Word</Link>
                            </Button>
                            <img src={`${process.env.PUBLIC_URL}/assets/zombies/ace.png`} />

                            <Button>
                                <Link to="/GameWrapper2">Fill In The Blank</Link>
                            </Button>
                            <img src={`${process.env.PUBLIC_URL}/assets/zombies/zombie.png`} />
                            <Button>
                                <Link to="/GameWrapper3">Plural Words</Link>
                            </Button>
                        </ButtonBar>
                        <div className="gameArea">
                        <Switch>
                            <Route path="/GameWrapper" component={GameWrapper} />
                            <Route path="/GameWrapper2" component={GameWrapper2} />
                            <Route path="/GameWrapper3" component={GameWrapper3} />
                            {/* <Route component={About} /> */}
                        </Switch>
                        </div>
                    </>
                </Router>
            </PageWrapper>
        </>
    )

}

export default Spelling