import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import questions from "../../utils/mathQuestions";

let num1 = 0;
let num2 = 0;
let wrongAnswers = [];

let operator = "";

let userAnswer = "";
let correctAnswer = "";
let leveledUp = false;

//questions.map(question => (
    // loop through
//))


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

const nextLevel = () => {
    console.log("hit nextLevel");
    // console.log(leveledUp);
    const displayWrong = () => {
        console.log("hit displayWrong");
        let index;
        for (var i = 0; i < wrongAnswers.length; i++){
            index = i;
            console.log(wrongAnswers[i]);
            num1 = wrongAnswers[i].num1;
            num2 = wrongAnswers[i].num2;
            console.log("index " + index);
        }
    }
    const reset = () => {
        num1++;
        num2 = 0;
    }

    wrongAnswers.length > 0 ? displayWrong(): reset();

}

const replay = () => {
    console.log("hit replay");

    num1++;
    num2 = 0; 
    if (num1 === 2){
        // console.log(wrongAnswers);
        for (let i = 0; i < wrongAnswers.length; i++){
            num1 = wrongAnswers[i].num1;
            num2 = wrongAnswers[i].num2;
        }
    }

}

const getNewNumber = () => {
    console.log("hit getNewNumber");
    if (operator === "/"){
        num1 < 5 ? num1++ : replay();
    } else {
        num2 < 5 ? num2++ : nextLevel();  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<change back to 10
    }

    //send numbers to page 
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

}

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
    console.log("Leveled up? " + leveledUp);
    //generates a new problem 

    num1 === 2 ? nextLevel() : getNewNumber();
    // getNewNumber();
}
const compare = () => {
    const problem = {num1, operator, num2, guessedCorrectly: false};
    // let index;
    const wrong = () => {
        problem.guessedCorrectly = false;
        wrongAnswers.push(problem);
        for (let i = 0; i < wrongAnswers.length; i++ ){
            if(problem === wrongAnswers[i]){

            }

        }
    }
    const right = () => {
        problem.guessedCorrectly = true;
    }
        correctAnswer === userAnswer ?  right(): wrong();
    }
    

    // correctAnswers.slice(index, 1)
    // console.log(problem);
    console.log(wrongAnswers);
    


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