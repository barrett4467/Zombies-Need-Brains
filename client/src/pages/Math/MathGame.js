import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";

let num1 = 0;
let num2 = 0;
let wrongAnswers = [];

let operator= "";

let userAnswer= "";
let correctAnswer= "";

const replayMissed = () => {
    let wrongRound2 = [];
    let problem = {num1, operator, num2};
    console.log(wrongAnswers);

    for (let i = 0; i < wrongAnswers.length; i++){
        num1 = wrongAnswers[i].num1;
        operator = wrongAnswers[i].operator;
        num2 = wrongAnswers[i].num2;
        
        problem = {num1, operator, num2};
        console.log(problem);
        // correctAnswer === userAnswer ?  console.log("correct") : wrongRound2.push(problem); 
        return (
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
    // console.log(wrongRound2);
}


const getNewNumber = () => {

    // num1 = Math.floor(Math.random() * 10);
    num2 < 5 ? num2++ : replayMissed();  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<change back to 10
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

    //generates a new problem 
    getNewNumber();
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




const handleClick = () => {
    console.log("in click event " + operator);
}



//the pages MathHome displays buttons 
const MathHome = () => {
    return(
        <>
            <Link to="/math/addition" >Addition</Link>
            <Link to="/math/subtraction" onClick={handleClick}>Subtraction</Link>
            <Link to="/math/multiplication" onClick={handleClick}>Multiplication</Link>
            <Link to="/math/division" onClick={handleClick}>Division</Link> 
        </>
    )
}

//
const DisplayProblem = (props) => {
    const url = props.match.url;
    const urlSplit = url.split("/");
    operator = urlSplit[2];
    console.log(operator);
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
                        break
                        default: 
                        break;
                    }
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