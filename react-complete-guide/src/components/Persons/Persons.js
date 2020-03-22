import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map( ( personas, index ) => {
    return <Person
        click={() => props.clicked(index)}
        name={personas.name}
        age={personas.age}
        key={personas.id}
        changed={(event) => props.changed(event, personas.id)} 
        />
});

export default persons;