import React from 'react';
import './personDisplay.css';



export const PersonFunction = (propss) => {
    const { name, age, ...args } = propss;
    const { company } = args;
    // const a = Math.random();            error state
    // console.log(a);
    // if (a > 0.9) {
    //     throw new Error("error");
    // }

    return (

        <div>
            <p className="new">  Employee {name} and Employee age {age} - {company}</p>
            <input type="text" className="textBox" onChange={propss.click} />
        </div>

    );
}

