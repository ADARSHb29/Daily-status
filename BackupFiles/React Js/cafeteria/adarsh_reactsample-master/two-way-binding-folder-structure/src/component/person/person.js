import React from 'react';
import { PersonFunction } from './personDisplay/personDisplay';
const Persons = (props) => {
    const { employee, binding } = props;
    return employee.map((n, index) => {
        return (<PersonFunction {...n} click={binding.bind(this, index)} />);
    });
}
export default Persons;