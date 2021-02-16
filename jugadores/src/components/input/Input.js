import React from 'react';

export default function Input({inputDataArray, onChange}){

    return (<>{
        inputDataArray.map( (data, i) => (<div key = {data.props.name}>
            <label>{data.label}</label>
            <input {...data.props} onChange = {e => onChange(e, i)} /><br/>
        </div>))
    }</>);
}