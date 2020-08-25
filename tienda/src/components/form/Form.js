import React, { Component } from 'react';
import Input from 'react';

class Form extends Component {

    state = {
        data: { nombre: 'asd', apellido: 'asd'}
    }

    handleChange = event => {
        this.setState({
            // ...this.state,
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    // async componentDidMount(){
    //     this.setState({
    //         data: await this.props.dataArray.reduce((json, data)=>{json[data.props.name] = data.props.value; return json}, {})
    //     })
    // }

    render(){
        return (<>
            <form>
                <Input
                    inputDataArray = {this.props.dataArray}
                    onChange = {this.handleChange}
                />
                {/* <input></input> */}
            </form>
            {/* <button onClick = {()=>console.log(this.state.data)}>Test State</button> */}
        </>);
    }
}

export default Form;