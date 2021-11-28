import React from "react";
import "./StayProd.css";
import picture1 from "../../images/illustration-stay-productive.png";

const StayProd = () => {
    return(
        <div>
            <img class="stayProdImg" src={picture1} alt="Stay Productive!" />

            <h1>Stay productive, wherever you are</h1>

            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

            <a href="#">See how Fylo works</a>
        </div>
    )
}

export default StayProd;