import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import questions from "../../utils/mathQuestions";


let num1 = 0;
let num2 = 0;
let operator="";
let userAnswer;
let correctAnswer;

const getNewNumber = () => {
    num2++;
}

const handleClick = (event) => {
    //prevent refresh
    event.preventDefault();
    //gets value that use types in field
    const isNumber = Number.isInteger(parseInt(document.getElementById("answer").value));

    const correct = () => {
        console.log("correct");
        getNewNumber();
    }

    //this will see if the answer is correct 
    calculateAnswer();
    //form verification checks to make sure input is number
    if (isNumber){
        userAnswer = parseInt(document.getElementById("answer").value);
        userAnswer === correctAnswer ?  correct(): console.log("incorrect");
    }
}
const compare = () => {
    correctAnswer === userAnswer ? console.log("correct") : console.log("incorrect");
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
        <>
            <p id="num1">{num1}</p>
            <p id="operation">+</p>
            <p id="num2">{num2}</p>
            <h3>______</h3>
            <form>
                <input type="text" placeholder="Answer" id="answer"></input>
                <button id="submit" onClick= {handleClick}>Submit</button>
            </form>
            <p id="userAnswer"></p>
            <p id="correctAnswer"></p>
        </>

    )
    
}


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