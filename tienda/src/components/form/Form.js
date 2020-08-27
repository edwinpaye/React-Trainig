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
        this.setState({arr: (JSON.parse(JSON.stringify(this.props.dataArray)))})
    }

    render(){
        return (<>
            <form onSubmit = {e => {e.preventDefault(); console.log(this.state)}}>
                {this.state.arr.map( (data, i) => (<div key = {i}>
                    {data.label && <label>{data.label}</label>}
                    {EF[data.element]({...data.props, onChange: e => this.handleChange(e, i)})}
                </div>))}
                <button type="submit">On Submit</button><br/>
                <button type='reset' onClick = {()=>this.setState({arr: (JSON.parse(JSON.stringify(this.props.dataArray)))})}>Reset</button>
            </form>
            <button onClick = {()=>this.props.submit(this.getDataJson())}>Ejecutar funcion Controller</button>
        </>);
    }
}

export default Form;