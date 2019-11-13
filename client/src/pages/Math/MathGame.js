import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import mathQuestions from "../../utils/mathQuestions";
import styled from "styled-components";
import { createBrowserHistory} from "history";

const ProblemWrapper = styled.section`
    text-align: center;
    background-color: white;
    h3: {
        background-color: white;
        font-size: 25px;
        padding: 15px;
    }
`

let questions = mathQuestions;
let num1 = 0;
let num2 = 0;
let index = 0;
let wrongAnswers = [];
let numWrong = 0;

let operator = "";

let userAnswer = "";
let correctAnswer = "";

const divisionQuestions = [
    {
        num1: 5,
        num2: 1,
        guessed: false
    },
    {
        num1: 9,
        num2: 3,
        guessed: false
    },
    {
        num1: 8,
        num2: 2,
        guessed: false
    },
    {
        num1: 8,
        num2: 1,
        guessed: false
    },
    {
        num1: 10,
        num2: 5,
        guessed: false
    },
    {
        num1: 9,
        num2: 1,
        guessed: false
    },
    {
        num1: 6,
        num2: 3,
        guessed: false
    },
    {
        num1: 2,
        num2: 1,
        guessed: false
    },
    {
        num1: 2,
        num2: 2,
        guessed: false
    },
    {
        num1: 6,
        num2: 2,
        guessed: false
    },
]


const display = () => {
    return(
        <ProblemWrapper>
            <h3 id="num1">{questions[num1].num1}</h3>
            <p id="operation">{operator}</p>
            <h3 id="num2">{questions[num2].num2}</h3>
            <h3>______</h3>
            <form>
                <input type="text" placeholder="Answer" id="answer"></input>
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <p id="userAnswer"></p>
            <p id="correctAnswer"></p>
        </ProblemWrapper>
    )
}

const nextLevel = () => {
    alert(`You win: ${numWrong} questions were guessed incorrectly`);

}

const getNewNumber = () => {

    if (index < questions.length - 1){
        //gets next question
        index++
        //send numbers to page 
        document.getElementById("num1").innerHTML = questions[index].num1;
        document.getElementById("num2").innerHTML = questions[index].num2;
    } else {
        //triggers end game
        nextLevel();
    }

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
    //generates a new problem 
    console.log(numWrong);
    if (numWrong === 3){
        alert("You lose!");
    }else {
        getNewNumber();
    }
}
const compare = () => {
    const wrong = () => {
        numWrong++;
    }
    const right = () => {
        questions[index].guessed = true;
    }
        correctAnswer === userAnswer ?  right(): wrong();
    }

    console.log(wrongAnswers);
    


const calculateAnswer = () => {
    switch (operator) {
        case "+":
            correctAnswer = questions[index].num1 + questions[index].num2;
            compare();
            break
        case "-":
            correctAnswer = questions[index].num1 - questions[index].num2;
            compare();
            break
        case "x":
            correctAnswer = questions[index].num1 * questions[index].num2;
            compare();
            break
        case "/":
            correctAnswer = questions[index].num1 / questions[index].num2;
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
            questions = divisionQuestions;
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