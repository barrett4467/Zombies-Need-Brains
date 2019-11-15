// import React, { useState } from 'react';
// import { BrowserRouter as Router, Link, NavLink, Switch, Route } from "react-router-dom"
// import SpellTheWord from "../components/games/SpellingGames/SpellTheWord"
// import FillInTheBlank from "../components/games/SpellingGames/FillInTheBlank"
// import PluralWords from "../components/games/SpellingGames/PluralWords"

// const questionBank=[]
// const answerBank=[]

// const App = () => {
//     const [data, setData] = useState({
//         guess: "",
//         score: 0,
//         lives: 3,
//         round: 1,
//         x: 0,
//         y: 0,
//         z: 0,
//         question: questionBank[x],
//         answer: answerBank[y],
//     })

//     const { guess, score, lives, round, x, y, question, answer } = data;

//     const increaseScore = () => {
//         setData({ ...data, score: score + 1 })
//     }
//     const lifeLost = () => {
//         setData({ ...data, live: lives - 1 })
//     }
//     const newWord = () => {
//         setData({
//             ...data,
//             question: questionBank[x += 1],
//             answer: answerBank[y += 1],
//             round: round + 1
//         })
//     }
//     const winner = () => {
//         alert("You win")
//     }
//     const playAgain = () => {
//         const play_again = prompt("Play Again?")
//         if (play_again) {
//             setData({
//                 ...data,
//                 answer: answerBank[x = 0],
//                 question: questionBank[y = 0],
//                 score: 0,
//                 round: 0,
//                 lives: 3,
//             })
//         } else (
//             alert("Cya later")
//         )
//     }
//     const handleChange = event => {
//         setData({ ...data, guess: event.target.value });
//     }
//     const handleSubmit = event => {
//         event.preventDefault();
//         console.log("click")
//         newWord()
//         if (guess === answer && round === 10) {
//             winner()
//         }
//         else if (guess === answer) {
//             increaseScore()
//             console.log("correct")
//         } else {
//             alert("Wrong" + answer)
//             lifeLost()
//             if (lives === 1) {
//                 alert("You lose")
//                 playAgain()
//             }
//         }
//         guess = ""
//     }



//     // 
// }
// // 


function Spelling() {
    return (
        <div>
            <Router>
                <>
                    <Link to="/SpellTheWord">Spell The Word</Link>
                    <Link to="/FillInTheBlank">Fill In The Blank</Link>
                    <Link to="/PluralWords">Plural Words</Link>
                    <Switch>
                        <Route path="/SpellTheWord" component={SpellTheWord} />
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