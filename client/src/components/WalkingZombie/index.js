import React, { useRef, useEffect } from "react";
import { TimelineMax } from "gsap/all";

const ZombieComponent = () => {
    //this is the movement
    let x = 1;
    let count = 0;
    let image = 1;
    //literally just grabs the zombie image
    let welcomeRef = useRef(null);
    let zombieRef = useRef(null);
    let paragraphRef = useRef(null);
    let secondParagraphRef = useRef(null);
    

    //pulls and starts a new greensock animation tl 
    const tl = new TimelineMax({ defaults: {duration: 0.25}, paused: false });
    //necessary for react to allow animation
    const animate = (j) => {
        useEffect(() => {
            tl.set(zombieRef, {attr:{src: "images/"+ j +".png"}});
            tl.to(zombieRef, {x: x, onComplete: () => x + 5} );


        })
    }
    const changeText = () => {
        useEffect(() => {
            tl.to(welcomeRef, 3, {opacity: 0, onComplete: () => {
                document.getElementById("story").innerHTML = `<p ref=${element=>{paragraphRef = element}}>Once upon a time, zombies had brains like you and me.</p>`
            }});
            tl.fromTo(paragraphRef, 4, {opacity: 0}, {opacity: 100, onComplete: () => {
                document.getElementById("story").innerHTML = `<p ref=${element=>{secondParagraphRef = element}}>But somewhere along the way, things started to change.</p>`
            }});
            tl.fromTo(secondParagraphRef, 4, {opacity: 0}, {opacity: 100, onComplete: () => {
                document.getElementById("story").innerHTML = `<p ref=${element=>{secondParagraphRef = element}}>There were rumors of a corporation driven by greed who poisoned the air where the zombies,
                who weren’t yet zombies, liked to feed.
                </p>`
            }});
            tl.fromTo(secondParagraphRef, 4, {opacity: 0}, {opacity: 100, onComplete: () => {
                document.getElementById("story").innerHTML = `<p ref=${element=>{secondParagraphRef = element}}>And slowly but surely the zombies, who weren’t quite zombies, lost their brains.
                </p>`
            }});
            tl.fromTo(secondParagraphRef, 4, {opacity: 0}, {opacity: 100, onComplete: () => {
                document.getElementById("story").innerHTML = `<p ref=${element=>{secondParagraphRef = element}}>It’s now up to you, dear fellow, to turn them back. 
                </p>`
            }});
            tl.fromTo(secondParagraphRef, 4, {opacity: 0}, {opacity: 100, onComplete: () => {
                document.getElementById("story").innerHTML = `<p ref=${element=>{secondParagraphRef = element}}>Test your skills with math and letter, in hopes of gaining our zombie’s brains back.  
                </p>`
            }});
            
        })
    }
    changeText();
    const callAnimate = () => {
        let i = 0;
        const loop = () => {
            for (i = 1; i < 11; i++){
                animate(i);
            }
        }
        loop();
        i = 0;
        loop();
        i = 0;
        loop();
        i = 0;
        loop();
    }

    // const handleStart = () => {
    //     tl.play();
    // };
    // //stops the animation
    // const handleStop = () => {
    //     tl.pause();
    // }

    return (
        <>
            <div className="wrapper" id="story">
                <h1 ref={element => {welcomeRef = element}}>
                    Welcome!
                </h1>
                <p ref={element => {paragraphRef = element}}></p>
                <p ref={element=>{secondParagraphRef = element}}></p>

            </div> 
            {/* <div>
                <button id="play" onClick={handleStart}>Play</button>
                <button id="stop" onClick={handleStop}>Stop</button>
            </div> */}
        </>
    )
}
export default ZombieComponent; 