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

    return (<>
        {todos.map((todo, i) => (
            <tr key={i} onClick = {()=>{if(method != null) method(i)}}>
                {index ? registryDataWithIndex(todo, i+1) : registryData(todo)}
            </tr>
        ))}
    </>);
}