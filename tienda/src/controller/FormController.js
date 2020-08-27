import React, { Component } from 'react';
import CF from '../factory/ComponentFactory';
import {arr} from '../mock/Usuarios';

class FormController extends Component {

    state = {}

    render(){
        return (<>
            <CF.form dataArray = {arr} submit = {console.log}/>
            {/* <form action="" method="post">
                <fieldset>
                    <legend>Título</legend>
                    <input type="radio" name="radio" id="radio"/> 
                    <label htmlFor="radio">Clic aquí</label>
                </fieldset>
            </form> */}
        </>);   
    }
}

export default FormController;