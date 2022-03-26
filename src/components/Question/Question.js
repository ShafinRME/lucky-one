import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <section>
            <p className='question-1'>What is the difference between Props and State in React.JS?</p>
            <div className='question'>

                <div className="props">
                    <ol>
                        <li>Props are immutable.</li>
                        <li>Props allow you to pass data from one component to other components as anargument</li>
                        <li>Props can be accessed by the child component.</li>
                        <li>Stateless component can have Props.</li>
                        <li>Props make components reusable.</li>
                    </ol>
                </div>
                <div className='vl'></div>
                <div className="state">
                    <ol>
                        <li>State is mutable.</li>
                        <li>State holds information about the components.</li>
                        <li>State cannot be accessed by child components.</li>
                        <li>Stateless components cannot have State.</li>
                        <li>State cannot make components reusable.</li>
                    </ol>
                </div>
            </div>
            <p className='question-2'>How Does React Actually Work?</p>

            <div className='question-2-body'>

                <p className='answer-text'>If we want learn something about react firstly we need to know about six Valuable Things or Gems.In below these gems are getting details...</p>
                <ul>
                    <li>
                        JSX:It is a simply syntactic sugar for creating very specific JavaScript objects.
                    </li>
                    <li>
                        Component:Components are independent and reusable bits of code.Their purpose is same of a function.But they work in isolation and return a HTML.
                    </li>
                    <li>
                        Props:It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. Props are passed to the component in the same way as arguments passed in a function.
                    </li>
                    <li>
                        Events:An event is an action that could be triggered as a result of the user action or system generated event.
                    </li>
                    <li>
                        State:The State of a component is an object that holds some information that may change over the lifetime of the component.
                    </li>
                    <li>
                        useEffect:useEffect is a function that gets executed for 3 different React component lifecycles.Those lifecycles are componentDidMount, componentDidUpdate, and componentWillUnmount lifecycles.useEffect accepts a function as it’s first argument. This function handler will take care of any side effects you like when it gets run.
                    </li>
                </ul>

            </div>
        </section >

    );
};

export default Question;