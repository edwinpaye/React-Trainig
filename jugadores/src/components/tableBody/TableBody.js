import React from 'react';

export default function TableBody({todos, keys, method, index = false, options}){

    const registryData = todo => keys.map(key => <td key = {key} >{todo[key]}</td>)

    const registryDataWithIndex = (todo, i) => { 
        let arr = registryData(todo);
        arr.unshift(<td key = {i}>{i}</td>);
        return arr;
    }

    const setOptions = (registryDataFunction, todo, i) => {
        let arrayContent = registryDataFunction(todo, i+1);
        options && arrayContent.push(<td key = 'options'>{options(i)}</td>);
        return arrayContent;
    } 

    const setBodyContent = registryDataFunction => todos.map((todo, i) => (
        <tr key={i} onDoubleClick = {()=>{method && method(i)}}>
            {setOptions(registryDataFunction, todo, i)}
        </tr>
    ))

    return (<>
        {index ? setBodyContent(registryDataWithIndex) : setBodyContent(registryData)}
    </>);
}