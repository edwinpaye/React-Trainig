import React, { Component } from 'react';

class Form extends Component {

    state = {
        arr: [],
        load: true
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
        this.setState({arr: [...this.props.dataArray], load: false})
    }

    render(){
        return (<>
            {this.state.load ? <h1>loading</h1> : <form>
                {this.state.arr.map( (data, i) => (<div key = {data.props.name}>
                    <label>{data.label}</label>
                    <input {...data.props} onChange = {e => this.handleChange(e, i)} /><br/>
                </div>))}
            </form>}
            <button onClick = {()=>this.props.submit(this.getDataJson())}>Ejecutar Submit</button>
        </>);
    }
}

export default Form;