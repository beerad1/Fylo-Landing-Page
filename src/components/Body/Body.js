import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import InfoGrid from "../InfoGrid/InfoGrid";
import Testimonials from "../Testimonials/Testimonials";
import StayProd from "../StayProd/StayProd";
import SignUp from "../SignUp/SignUp";
import CompInfo from "../CompInfo";
import AboutMenu from "../AboutMenu/AboutMenu";
import ContactMenu from "../ContactMenu";
import "./Body.css";

const Body = () => {
    return(
        
        <main>

            <GetStarted />

            <InfoGrid />

            <StayProd />

            <Testimonials />

            <SignUp />

            <CompInfo />

            <AboutMenu />

            <ContactMenu />

        </main>

    )
}

export default Body;