import React, { Component } from 'react';
import Form from '../components/form/Form';

class FormController extends Component {

    state = {}

    render(){
        const arr = [{
            label: 'Nombre: ',
            element: 'input',
            props: {type : 'file',
                    name: 'nombre',
                    value: ''}
        },{
            label: 'Apellido: ',
            element: 'input',
            props: {type : 'range',
                    name: 'apellido',
                    value: 10}
        },{
            label: 'Seleccione: ',
            element: 'select',
            props: {name: 'select',
                    value: 'css3',
                    options: [
                        'css3',
                        'html5',
                        'JavaScript']}
        },{
            label: 'Comentario: ',
            element: 'textarea',
            props: {name: 'comentario',
                    value: ''}
        }]
        return (<>
            <Form dataArray = {arr} submit = {console.log}/>
            <button onClick = {()=>console.log(arr[3].props)}>boton controller</button>
        </>);   
    }
} 

export default FormController;