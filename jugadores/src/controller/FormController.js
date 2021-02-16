import React, { Component } from 'react';
import CF from '../factory/ComponentFactory';

class FormController extends Component {

    render(){
        return (<>
            <h1>Formulario de {this.props.title}</h1>
            <CF.form 
                dataArray = {this.props.dataForm} 
                submit = {this.props.submit}
                index = {this.props.index}
                retorno = {this.props.retorno}
                todo = {this.props.todos[this.props.index]}
            />
        </>);
    }
}

export default FormController;