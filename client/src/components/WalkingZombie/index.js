import React, { useRef, useEffect } from "react";
import { TimelineMax } from "gsap/all";

const ZombieComponent = () => {
    //this is the movement
    let x = 1;
    let count = 0;
    let image = 1;
    //literally just grabs the zombie image
    let zombieRef = useRef(null);
    let paragraphRef = useRef(null);

    //pulls and starts a new greensock animation tl 
    const tl = new TimelineMax({ defaults: {duration: 0.25}, paused: false });
    //necessary for react to allow animation
    const animate = (j) => {
        useEffect(() => {
            tl.set(zombieRef, {attr:{src: "images/"+ j +".png"}});
            tl.to(zombieRef, {x: x, onComplete: () => x + 5} );
            tl.fromTo(paragraphRef, 2, {opacity: 0}, {opacity: 100} );

        })
    }
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
    callAnimate();

    // const handleStart = () => {
    //     tl.play();
    // };
    // //stops the animation
    // const handleStop = () => {
    //     tl.pause();
    // }

    return (
        <>
            <div className="wrapper">
                <p ref={element => {paragraphRef = element}}>Oh No! The Zombies have lost their brains! Its up to you to help them!</p>
                <img id="one" src={`${process.env.PUBLIC_URL}/images/${image}.png`} alt="zombie" ref={element => {zombieRef = element}}/>
            </div> 
            {/* <div>
                <button id="play" onClick={handleStart}>Play</button>
                <button id="stop" onClick={handleStop}>Stop</button>
            </div> */}
        </>
    )
}
export default ZombieComponent; 