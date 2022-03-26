import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div className='question-container'>
            <div className='question-ans'>
                <h3>How React Works</h3>
                <p>React is an efficient, and flexible JavaScript library for building user interfaces. React separate a Document Object Model, which name is virtual dom. Virtual dom is faster to work.
                </p><p> React compare virtual dom with real dom with an algorithm and decide where a change happened. Then he doesn't Rerender full dom just change the element. This algorithm name is the reconciliation algorithm.That's why website runs faster.</p>
            </div>
            <div className='question-ans'>
                <h3>Props Vs State</h3>
                <p>  We can pass the data between the components using Props and State.</p>
                <p><u>Props:</u>  Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>

                <p> <u> State:</u> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            </div>
        </div >
    );
};

export default QuestionAns;