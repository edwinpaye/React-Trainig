import React, { Component } from 'react';

class Form extends Component {

    state = {
        arr: [],
        select: '',
        textarea: ''
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
        this.setState({arr: [...this.props.dataArray]})
    }

    changeSelect = e => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render(){
        return (<>
            <form onSubmit = {e => {e.preventDefault(); console.log(this.state)}}>
                {this.state.arr.map( (data, i) => (<div key = {data.props.name}>
                    <label>{data.label}</label>
                    <input {...data.props} onChange = {e => this.handleChange(e, i)} /><br/>
                </div>))}
                <label>
                    Pick your favorite flavor:
                    <select value = {this.state.select} name="select" onChange = {this.changeSelect}>
                        <option value=""></option>     
                        <option value="value1">Value 1</option> 
                        <option value="value2">Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                </label><br/>
                <textarea value={this.state.textarea} name = 'textarea' onChange={this.changeSelect} /><br/>
                <button type="submit">On Submit</button><br/>
            </form>
            <button onClick = {()=>this.props.submit(this.state.select)}>Ejecutar Submit</button>
        </>);
    }
}

export default Form;