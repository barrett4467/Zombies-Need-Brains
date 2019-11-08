import React from "react";

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random()* 10);

//on submit of answer
const handleSubmit = (event) => {
    //prevent refresh
    event.preventDefault();
    const answer = document.getElementById("answer").value;
    console.log(answer);
}

const Addition = () => {
    return(
        <>
            <h3>{num1}</h3>
            <h3>+</h3>
            <h3>{num2}</h3>
            <h3>______</h3>
            <form>
                <input type="text" placeholder="Answer" id="answer"></input>
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

const MathGame = () => {
    return(
        <>
            <Addition></Addition>
        </>
    )
}

//want to be able to do addition, subtraction, multiplication, and division (probably the router switch thing)

export default MathGame;