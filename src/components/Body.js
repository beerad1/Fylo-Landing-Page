import React from "react";
import GetStarted from "./GetStarted";
import InfoGrid from "./InfoGrid";
import Testimonials from "./Testimonials";
import StayProd from "./StayProd";
import SignUp from "./SignUp";
import CompInfo from "./CompInfo";
import AboutMenu from "./AboutMenu";
import ContactMenu from "./ContactMenu";

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