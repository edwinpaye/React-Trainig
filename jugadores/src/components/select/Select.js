import React from 'react';

export default function Select({value, name , options, onChange}){

    return (<select name = {name} value = {value} onChange = {onChange}>
        {options.map(option => 
            <option key = {option} value = {option}>{option}</option>
        )}
    </select>);
}