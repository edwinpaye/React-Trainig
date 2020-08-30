import React, { Component } from 'react';
import CF from '../factory/ComponentFactory';
import { usuario } from '../mock/Usuarios';
import Service from '../service/Service';

class FormController extends Component {

    state = {
        url: 'http://localhost:8080/usuario'
    }

    sendFormData = object => Service.post(
        this.state.url,
        resp => {
            alert(resp.message);
        },
        console.log,
        object
    )

    render(){
        return (<>
            <h1>Formulario</h1>
            <CF.form dataArray = {usuario} submit = {this.sendFormData}/>
            {/* <form action="" method="post">
                <input type="radio" name="radio" id="radio"/> 
                <label htmlFor="radio">Clic aquí</label>
            </form> */}
        </>);
    }
}

export default FormController;