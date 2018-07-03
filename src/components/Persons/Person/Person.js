import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.onPersonClick}>Hi I'm {props.name}</p>
            <input type="text"
                onChange={props.onNameChange} />
        </div>
    );
}

export default person;
