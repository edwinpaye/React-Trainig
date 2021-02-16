import React, { useState, useEffect } from 'react';
import EF from '../components/form/ElementFactory';

export default function CustomFormController({title, dataForm, submit, index, retorno, todos, options}){
    
    let [state, setState] = useState({arr: []})

    useEffect(()=>setPropsToState(), []);

    let handleChange = (event, i) => {
        const {value} = event.target;
        let newState = state.arr;
        newState[i].props.value = value;
        setState({arr: newState})
    }

    let getDataJson = () => state.arr.reduce(
        (json, data) => {
            json[data.props.name] = data.props.value;
            return json
        }, {}
    )

    let setPropsToState = () => {
        let dataArray = JSON.parse(JSON.stringify(dataForm));
        index > -1 && dataArray.forEach(element => {
            element.props.value = todos[index][element.props.name];
        });
        setState(
            {arr: dataArray}
        )
    }

    return (<>
        <h1>Formulario de {title}</h1>
        <form onSubmit = {e => {e.preventDefault(); submit(getDataJson())}}>
            {state.arr.map( (data, i) => <fieldset key = {i}>
                {data.legend && <legend>{data.legend}</legend>}
                {data.label && <label>{data.label}</label>}
                {EF[data.element]({...data.props, onChange: e => handleChange(e, i)})}
            </fieldset>)}
            {retorno && retorno()}
            <button type="submit">Guardar</button>
            <button type='reset' onClick = {()=>setPropsToState()}>Reset</button>
        </form>
    </>);
}