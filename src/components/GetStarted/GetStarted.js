import React from "react";
import "./GetStarted.css"
import picture2 from "../../images/illustration-intro.png";

const GetStarted = () => {
    return(
        <div class="getContainer">
            <img class="getStartedImg" src={picture2} alt="Get Started!" />

            <h1>All your files in one secure location, accessible anywhere.</h1>

            <p>Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.</p>

            <button class="getStartedBtn">Get Started</button>
        </div>
    )
}

export default GetStarted;