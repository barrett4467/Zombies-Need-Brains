import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";

let num1 = 0;
let num2 = 0;
let wrongAnswers = [];

let operator= "";

let userAnswer= "";
let correctAnswer= "";
let leveledUp = false;
const display = () => {
    return(
        <>
            <h3 id="num1">{num1}</h3>
            <p id="operation">{operator}</p>
            <h3 id="num2">{num2}</h3>
            <h3>______</h3>
            <form>
                <input type="text" placeholder="Answer" id="answer"></input>
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <p id="userAnswer"></p>
            <p id="correctAnswer"></p>
        </>
    )
}

const levelUp = () => {
    leveledUp = true;

    // num1++;
    // num2 = 0;
}

const replay = () => {
    console.log(wrongAnswers);

    for (let i = 0; i < wrongAnswers.length; i++){
        num1 = wrongAnswers[i].num1;
        num2 = wrongAnswers[i].operator;
        num2 = wrongAnswers[i].num2;
        display();
    }
    console.log("Done");

}

// const replayMissed = () => {
//     let wrongRound = wrongAnswers;
//     let problem = {num1, operator, num2};
//     console.log("wrongRound");
//     console.log(wrongRound);
//     console.log("wrongAnswers");
//     console.log(wrongAnswers);
//     wrongAnswers = [];
//     console.log("wrongRound");
//     console.log(wrongRound);
//     if (wrongRound.length > 0){
//         for (let i = 0; i < wrongRound.length; i++){
//             num1 = wrongRound[i].num1;
//             operator = wrongRound[i].operator;
//             num2 = wrongRound[i].num2;
            
//             problem = {num1, operator, num2};
//             console.log(problem);
//             // correctAnswer === userAnswer ?  console.log("correct") : wrongRound2.push(problem); 
//             return (
//                 <>
//                     <h3 id="num1">{problem.num1}</h3>
//                     <p id="operation">{problem.operator}</p>
//                     <h3 id="num2">{problem.num2}</h3>
//                     <h3>______</h3>
//                     <form>
//                         <input type="text" placeholder="Answer" id="answer"></input>
//                         <button id="submit" onClick={handleSubmit}>Submit</button>
//                     </form>
//                     <p id="userAnswer"></p>
//                     <p id="correctAnswer"></p>
//                 </>
//             )
//         }
//     } else {
//         console.log("will be a badge");
//     }


//     // console.log(wrongRound2);
// }


const getNewNumber = () => {

    // num1 = Math.floor(Math.random() * 10);
    if (operator === "/"){
        num1 < 5 ? num1++ : levelUp();
    } else {
        num2 < 5 ? num2++ : replay();  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<change back to 10
    }
    //send numbers to page 
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

}
let correctAnswers = [];
//on submit of answer
const handleSubmit = (event) => {
    //prevent refresh
    event.preventDefault();
    //gets value that use types in field
    userAnswer = parseInt(document.getElementById("answer").value);

    //equates the math problem
    calculateAnswer();

    //puts user answer and correct answer to the page 
    document.getElementById("userAnswer").innerHTML = `Your Answer: ${userAnswer}`;
    document.getElementById("correctAnswer").innerHTML = `Correct Answer: ${correctAnswer}`

    //clears the input field
    document.getElementById("answer").value = "";
    leveledUp ? console.log(true) : getNewNumber();
    // //generates a new problem 
    // getNewNumber();
}
const compare = () => {
    const problem = {num1, operator, num2};
    correctAnswer === userAnswer ? correctAnswers.push(problem) : wrongAnswers.push(problem);

}
const calculateAnswer = () => {
    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            compare();
            break
        case "-":
            correctAnswer = num1 - num2;
            compare();
            break
        case "x":
            correctAnswer = num1 * num2;
            compare();
            break
        case "/":
            correctAnswer = num1 / num2;
            compare();
            break
        default:
            break
    }
}

//the pages MathHome displays buttons 
const MathHome = () => {
    return(
        <>
            <Link to="/math/addition">Addition</Link>
            <Link to="/math/subtraction">Subtraction</Link>
            <Link to="/math/multiplication">Multiplication</Link>
            <Link to="/math/division">Division</Link> 
        </>
    )
}

//
const DisplayProblem = (props) => {
    const url = props.match.url;
    const urlSplit = url.split("/");
    operator = urlSplit[2];

    switch (operator){
        case "addition":
            operator = "+";
            break
        case "subtraction":
            operator = "-";
            break
        case "multiplication":
            operator = "x";
            break
        case "division":
            operator = "/";
            num1 = 1;
            num2 = 1;
            break
        default: 
            break;
        }
        return(
            display()

        )
}

//the actual math game component
const MathGame = () => {
    return(
        <>
            <Router>
                <Switch>
                <Route exact path={"/math/"} component={MathHome} />
                <Route exact path={"/math/addition"} component={DisplayProblem} />
                <Route exact path={"/math/subtraction"} component={DisplayProblem} />
                <Route exact path={"/math/multiplication"} component={DisplayProblem} />
                <Route exact path={"/math/division"} component={DisplayProblem} />
                </Switch>
            </Router>
        </>
    )
}
export default MathGame;