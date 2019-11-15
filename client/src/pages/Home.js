import React from "react";
import Buttons from "../components/Button";
import Header from "../components/Header";

function Home () {
    return (
        <>   <div style={{display:"flex", justifyContent:"center"}}>
                <Header></Header>        
            </div>     
            {/* <div className="buttonHolder" style={{textAlign: "center"}}>
                <Buttons
                id="mathButton"
                destination= "/math"
                content= "Math!"
                >
                </Buttons>
                <Buttons
                id="spellingButton"
                destination="/spelling"
                content= "Spelling!"
                >
                </Buttons>
            </div> */}
        </>
    )
}


export default Home;
