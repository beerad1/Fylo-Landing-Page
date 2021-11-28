import React from "react";
import Head from "./components/Head";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
    return(
        <div class="App">
            <Head />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
