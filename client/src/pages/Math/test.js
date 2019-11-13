import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import questions from "../../utils/mathQuestions";

let num1 = 0;
let num2 = 0;
let index = 0;
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
        </>
    )
}

const nextLevel = () => {
    console.log("hit nextLevel");
    // console.log(leveledUp);
    const displayWrong = () => {
        console.log("hit displayWrong");
        console.log(questions);
        for (var i = 0; i < questions.length; i++){
            if(questions[i].guessed === false){
                console.log(questions[i]);
                num1 = questions[i].num1;
                num2 = questions[i].num2;
                console.log(num1, num2);
                correctAnswer = num1 + num2;
                console.log(correctAnswer);
                console.log(num1 + num2);

                document.getElementById("num1").innerHTML = questions[i].num1;
                document.getElementById("num2").innerHTML = questions[i].num2;
                // document.getElementById("correctAnswer").innerHTML = `Correct Answer: ${questions[i].num1 + questions[i].num2}`;
            } else {
                console.log("All questions were guessed correctly");
            }
        }
    }
    const reset = () => {
        num1++;
        num2 = 0;
    }

    wrongAnswers.length > 0 ? displayWrong(): reset();

}

const getNewNumber = () => {
    console.log("hit getNewNumber");

    // num2 < 3 ? index++ : nextLevel();  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<change back to 10

    if (index <= 2){
        console.log("Index: " + index);
        index++
        console.log("Index: " + index);
        //send numbers to page 
        document.getElementById("num1").innerHTML = questions[index].num1;
        document.getElementById("num2").innerHTML = questions[index].num2;
    } else {
        nextLevel();
        console.log("done");
    }
    console.log(questions[index])

}

//on submit of answer
const handleSubmit = (event) => {
    //prevent refresh
    event.preventDefault();
    //gets value that use types in field
    userAnswer = parseInt(document.getElementById("answer").value);

    correctAnswer = num1 + num2;
    console.log("1Correct Answer: " + correctAnswer);
    //equates the math problem
    calculateAnswer();

    //puts user answer and correct answer to the page 
    document.getElementById("userAnswer").innerHTML = `Your Answer: ${userAnswer}`;
    document.getElementById("correctAnswer").innerHTML = `Correct Answer: ${questions[index].answer}`

    //clears the input field
    document.getElementById("answer").value = "";
    console.log("Leveled up? " + leveledUp);
    //generates a new problem 
    getNewNumber();
}
const compare = () => {
    // let index;
    const wrong = () => {
        console.log("wrong");
        questions[index].guessed = false;
        wrongAnswers.push(questions[index]);
        // for (let i = 0; i < wrongAnswers.length; i++ ){
        //     if(questions[index] === wrongAnswers[i]){

        //     }

        // }
    }
    const right = () => {
        console.log("Right");
        questions[index].guessed = true;
    }
    console.log("Answer:");
    console.log(questions[index].answer);
        questions[index].answer === userAnswer ?  right(): wrong();
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