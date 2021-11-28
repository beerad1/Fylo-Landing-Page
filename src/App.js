import React from "react";
import Head from "./components/Head";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import '../src/css/style.css';

export default function App() {
    return(
        <>
            <Head />
            <Header />
            <Body />
            <Footer />
        </>
    )
}
