import React from "react";
import { quotes } from "./Quotes";
import QuoteBlock from "./QuoteBlock";

const Testimonials = () => {

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