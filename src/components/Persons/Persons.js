import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
        return <Person name={person.name}
          onPersonClick={() => props.onPersonClick(index)}
          onNameChange={(event) => props.onNameChange(event, person.id)}
          key={person.id} />
    })
}

export default persons;