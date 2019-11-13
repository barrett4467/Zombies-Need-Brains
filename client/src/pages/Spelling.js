import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, NavLink,  Switch, Route } from "react-router-dom"
import SpellTheWord from "../components/games/SpellingGames/SpellTheWord"
import FillInTheBlank from "../components/games/SpellingGames/FillInTheBlank"
import PluralWords from "../components/games/SpellingGames/PluralWords"

// const test = styled.h2`
//     background:Palette.color1   
// `

function Spelling() {
    return (
        <div>
            <Router>
                <>
                        <Link to={"/SpellTheWord"}>Spell The Word</Link>
                        <Link to="/FillInTheBlank">Fill In The Blank</Link>
                        <Link to="/PluralWords">Plural Words</Link>
                    <Switch>
                        <Route  path="/SpellTheWord" component={SpellTheWord} />
                        <Route path="/FillInTheBlank" component={FillInTheBlank} />
                        <Route path="/PluralWords" component={PluralWords} />
                        {/* <Route component={About} /> */}
                    </Switch>
               </>     
            </Router>
        </div>
    )
}


export default Spelling;