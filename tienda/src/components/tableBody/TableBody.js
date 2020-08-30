import React from 'react';

export default function TableBody({todos, keys, method, index = false}){

    const registryData = todo => keys.map(key => (
        <td key = {key} >{todo[key]}</td>
    ))

    const registryDataWithIndex = (todo, i) => { 
        let arr = registryData(todo);
        arr.unshift(<td key = {i}>{i}</td>);
        return arr;
    }

    const setBodyContent = registryDataFunction => todos.map((todo, i) => (
        <tr key={i} onClick = {()=>{method && method(i)}}>
            {registryDataFunction(todo, i+1)}
        </tr>
    ))

    return (<>
        {index ? setBodyContent(registryDataWithIndex) : setBodyContent(registryData)}
    </>);
}