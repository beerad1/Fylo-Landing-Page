import React from "react";
import "./Testimonials.css";
import profile1 from "../../images/profile-1.jpg"
import profile2 from "../../images/profile-2.jpg"
import profile3 from "../../images/profile-3.jpg"
import { getQuotes } from "../Quotes";
import QuoteBlock from "../QuoteBlock";

const Testimonials = () => {

    // const quotes = getQuotes();

    // const renderQuotes = () =>
    //     quotes.map((quote) => (
    //         <QuoteBlock
    //             text = {quote.text}
    //             author = {quote.author}
    //             profile = {quote.profile}
    //             job = {quote.job}
    //         />
    //     ));

    return(

        // <section>
        //     {renderQuotes}
        // </section>         
        <section>
            <div class="testBox">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile1} alt="Satish Patel" />
                    <div>
                        <h3>Satish Patel</h3>
                        <p>Founder & CEO, Huddle</p> 
                    </div>
                </div>
            </div>

            <div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile2} alt="Bruce McKenzie" />
                    <div>
                        <h3>Bruce McKenzie</h3>
                        <p>Founder & CEO, Huddle</p> 
                    </div>
                </div>
            </div>

            <div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile3} alt="Iva Boyd" />
                    <div>
                        <h3>Iva Boyd</h3>
                        <p>Founder & CEO, Huddle</p> 
                    </div>
                </div>
            </div>
        
        </section>
            
    )
}

export default Testimonials;