import React, { Component } from 'react';
import Form from '../components/form/Form';
// import Input from '../components/input/Input';

class FormController extends Component {

    state = {}

    render(){

        const arr = [{
            label: 'Nombre',
            props: {type : 'file',
                    name: 'nombre',
                    value: ''}
        },{
            label: 'Apellido',
            props: {type : 'password',
                    name: 'apellido',
                    value: ''}
        }]

        return (<>
            <Form dataArray = {arr} submit = {console.log}/>
        </>);   
    }
} 

export default FormController;