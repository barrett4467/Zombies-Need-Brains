import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";

let num1 = 0;
let num2 = 0;
let wrongAnswers = [];

let operator = "";

let userAnswer = "";
let correctAnswer = "";
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

const nextLevel = () => {
    leveledUp = true;
    for (var i = 0; i < wrongAnswers.length; i++){
        num1 = wrongAnswers[i].num1;
        num2 = wrongAnswers[i].num2;
    }
}

const replay = () => {

    console.log(operator);
    console.log(wrongAnswers);
    console.log(correctAnswers);
    num1++;
    num2 = 0; 
    if (num1 === 2){
        console.log(wrongAnswers);
        for (let i = 0; i < wrongAnswers.length; i++){
            num1 = wrongAnswers[i].num1;
            num2 = wrongAnswers[i].num2;
        }
    }
    // let i = 0;
    // if (wrongAnswers.length > 0){
    //     num1 = wrongAnswers[i].num1;
    //     num2 = wrongAnswers[i].num2;
    //     display();
    // } else {
    //     const loadMissed = () => {
    //             console.log("Wrong Answers");
    //             console.log(wrongAnswers);
    //             console.log("THIS: " + num1);
    //             num1 = 1;
            
    //     }
    //     const increaseNum = () => {
    //         num1 = num1 + 1;
    //         console.log("Num1: " + num1);
    //         num2 = 0;
    //     }
    //     wrongAnswers.length > 0 ? loadMissed() : increaseNum();
    //     num1 = 5 ? loadMissed() : increaseNum();
    // // }
    // console.log("Done");

    // console.log(leveledUp);

}

const getNewNumber = () => {
    // if(wrongAnswers.length > 0){
    //     for (let i = 0; i < wrongAnswers.length; i++){
    //         num1 = wrongAnswers[i].num1;
    //         num2 = wrongAnswers[i].num2;
    //     }
    // } else {

    // }
    
    if (operator === "/"){
        num1 < 5 ? num1++ : replay();
    } else {
        num2 < 5 ? num2++ : nextLevel();  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<change back to 10
    }
    // num1 = Math.floor(Math.random() * 10);
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
    // getNewNumber();
    leveledUp ? nextLevel() : getNewNumber();
    // //generates a new problem 
    // getNewNumber();
}
const compare = () => {
    const problem = {num1, operator, num2};
    let index = -1;
    const check = () => {
        wrongAnswers.push(problem);
        index = wrongAnswers.indexOf(problem);
    }

    correctAnswer === userAnswer ?  console.log("this"): check();
    

    // correctAnswers.slice(index, 1)
    console.log("index: " + index);
    console.log(problem);
    console.log(wrongAnswers);
    

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