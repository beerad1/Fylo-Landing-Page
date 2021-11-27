import React from 'react';

const QuoteBlock = ({
    text,
    author,
    profile,
    job,
}) => {
    return(
        <div>
            <p>{text}</p>
            <div>
                <img src={profile} />
                <div>
                    <h3>{author}</h3>
                    <p>{job}</p> 
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock;