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
        this.setState({
            arr: this.setValue(event, i)
        })
    }
    // componentDidMount(){
    //     this.setState({
    //         data: this.state.arr.reduce((json, data)=>{json[data.props.name] = data.props.value; return json}, {}),
    //     })
    // }
    setValue(event, i){
        let arr = [...this.state.arr]
        arr[i].props.value = event.target.value
        return arr
    }

    render(){
        return (<>
            <form>
                <Input inputDataArray = {this.state.arr}
                    onChange = {this.handleChange} 
                />
            </form>
            <button onClick = {()=>console.log([...this.state.arr])}>Test State</button>
        </>);   
    }
} 

export default FormController;