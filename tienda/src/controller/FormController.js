import React, { Component } from 'react';
// import Form from '../components/form/Form';
import CF from '../factory/ComponentFactory';
import {arr} from '../mock/Usuarios';

class FormController extends Component {

    state = {}

    render(){
        
        return (<>
            <CF.form dataArray = {arr} submit = {console.log}/>
        </>);   
    }
}

export default FormController;