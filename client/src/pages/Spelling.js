import React, { useState } from 'react';
import { Button, Fade } from "reactstrap"
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from "react-router-dom"
import GameWrapper from "../components/games/SpellingGames/GameWrapper"
import GameWrapper2 from "../components/games/SpellingGames/GameWrapper2"
import GameWrapper3 from "../components/games/SpellingGames/GameWrapper3"


const Spelling = () => {  

    return (
        <>

            <Router>
                <>
                <div className="buttonBar">
                    <Button>
                        <Link to="/GameWrapper">Spell The Word</Link>
                    </Button>
                    <Button>
                        <Link to="/GameWrapper2">Fill In The Blank</Link>
                    </Button>
                    <Button>
                        <Link to="/GameWrapper3">Plural Words</Link>
                    </Button>
                </div>
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