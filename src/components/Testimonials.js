import React from "react";
import { getQuotes } from "./Quotes";
import QuoteBlock from "./QuoteBlock";

const Testimonials = () => {

    const quotes = getQuotes();

    const renderQuotes = () =>
        quotes.map((quote) => (
            <QuoteBlock
                text = {quote.text}
                author = {quote.author}
                profile = {quote.profile}
                job = {quote.job}
            />
        ));

    return(

        <section>

            {renderQuotes}

        </section>          
            
    )
}

export default Testimonials;