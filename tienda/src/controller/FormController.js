import React, { Component } from 'react';
// import Form from '../components/form/Form';
import Input from '../components/input/Input';

class FormController extends Component {

    state = {
        arr: [{
            label: 'Nombre',
            props: {type : 'text',
                    name: 'nombre',
                    value: 'nombre aqui....'}
        },{
            label: 'Apellido',
            props: {type : 'text',
                    name: 'apellido',
                    value: 'apellido aqui....'}
        }]
    }
    handleChange = (event, i) => {
        const {value} = event.target
        this.setState(state => {
            state.arr[i].props.value = value
            return state
        })
    }

    getDataJson = () => this.state.arr.reduce((json, data) => {
            json[data.props.name] = data.props.value;
            return json
        }, {})
    

    render(){
        return (<>
            <form>
                <Input inputDataArray = {this.state.arr}
                    onChange = {this.handleChange} 
                />
            </form>
            <button onClick = {()=>console.log(this.getDataJson())}>Test State</button>
        </>);   
    }
} 

export default FormController;