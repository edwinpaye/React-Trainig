import React, { Component } from 'react';
import EF from './ElementFactory';

class Form extends Component {

    state = {
        arr: []
    }

    handleChange = (event, i) => {
        const {value} = event.target
        this.setState(state => {
            state.arr[i].props.value = value
            return state
        })
    }

    getDataJson = () => this.state.arr.reduce(
        (json, data) => {
            json[data.props.name] = data.props.value;
            return json
        }, {}
    )

    componentDidMount(){
        this.setPropsToState()
    }

    setPropsToState = () => {
        this.setState(
            {arr: (JSON.parse(JSON.stringify(this.props.dataArray)))}
        )
    }

    render(){
        return (
            <form onSubmit = {e => {e.preventDefault(); this.props.submit(this.getDataJson())}}>
                {this.state.arr.map( (data, i) => <fieldset key = {i}>
                    {data.legend && <legend>{data.legend}</legend>}
                    {data.label && <label>{data.label}</label>}
                    {EF[data.element]({...data.props, onChange: e => this.handleChange(e, i)})}
                </fieldset>)}
                <button type="submit">On Submit</button>
                <button type='reset' onClick = {this.setPropsToState}>Reset</button>
            </form>
        );
    }
}

export default Form;