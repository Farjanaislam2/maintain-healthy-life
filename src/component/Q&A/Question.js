import React from 'react';

const Question = () => {
    return (
       <div className='bg-gray-300 text-black text-xl '>
         <div>
            <p>1.How does react Work?</p>
            React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
        </div>
        <div>
            <p>2.Difference between props and state.</p>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
        </div>
       </div>
    );
};

export default Question;