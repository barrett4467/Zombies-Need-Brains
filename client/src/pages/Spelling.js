import React, { useState } from 'react';
import { Button, } from "reactstrap"
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from "react-router-dom"
import styled from "styled-components";
import GameWrapper from "../components/games/SpellingGames/GameWrapper"
import GameWrapper2 from "../components/games/SpellingGames/GameWrapper2"
import GameWrapper3 from "../components/games/SpellingGames/GameWrapper3"





const ButtonBar = styled.section`
img{
    width:75px;    
    margin-left:2em
    margin-top:1em;
}
`

const Spelling = () => {
    return (
        <>

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
                    <Switch>
                        <Route path="/GameWrapper" component={GameWrapper} />
                        <Route path="/GameWrapper2" component={GameWrapper2} />
                        <Route path="/GameWrapper3" component={GameWrapper3} />
                        {/* <Route component={About} /> */}
                    </Switch>
                </>
            </Router>

        </>
    )

}

export default Spelling