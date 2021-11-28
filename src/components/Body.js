import React from "react";
import GetStarted from "./GetStarted";
import InfoGrid from "./InfoGrid";
import Testimonials from "./Testimonials";
import StayProd from "./StayProd";
import SignUp from "./SignUp";
import CompInfo from "./CompInfo";
import AboutMenu from "./AboutMenu/AboutMenu";
import ContactMenu from "./ContactMenu";

const Body = () => {
    return(
        
        <main>

            <aside class="aside__left" /> 

            <GetStarted />

            <InfoGrid />

            <StayProd />

            <Testimonials />

            <SignUp />

            <CompInfo />

            <AboutMenu />

            <ContactMenu />

            <aside class="aside__right" /> 

        </main>

    )
}

export default Body;