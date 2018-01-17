import React from 'react';
import button from './button.css';

const Button = (props) => {
    return (
        <div>
            <button className="Button" onClick={props.state.bind(this, "parthasarathy", "adarsh kumar")} >change state value</button>
            <button className="Button" onClick={props.sorting.bind(this, "name")} >Sort Name</button>
            <button className="Button" onClick={props.sorting.bind(this, "age")} >Sort age</button>
            {props.Showcontent ? <button className="Button" onClick={props.Toggle} >hide content</button> : ""}
            {props.Showcontent === false ? <button className="showButton" onClick={props.Toggle} >show content</button> : null}
        </div>
    );
}


export default Button;