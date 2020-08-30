import React, { Component } from 'react';
import CF from '../factory/ComponentFactory';
import Service from '../service/Service';

class TableController extends Component {

    state = { 
        todos: [],
        load: true
    }

    componentDidMount(){
        Service.get(
            'http://localhost:8080/usuario', 
            resp => this.setState({ 
                todos: resp,
                load: false
            }),
            err => {
                this.setState({
                    todos: [err.statusText],
                    load: false
                });
                console.log(err);
            }
        );
    }

    getObjectKeys = () => {
        let keys = Object.keys(this.state.todos[0]);
        keys.indexOf('id') <! 0 && keys.splice(keys.indexOf('id'), 1);
        return keys;
    }

    render(){
        // titles.unshift('posicion');
        const keys = this.state.todos.length !== 0 ? this.getObjectKeys() : [];
        const titles = ['Nro.', 'Nobre de Usuario', 'Password', 'Direccion', 'C.I.', 'Email', 'Cargo'];

        return (
            <div>
                <h2>{this.state.todos.length === 0 ? 'No hay contenido' : 'Lista de Prueba'}</h2>
                
                {this.state.load ? <CF.preloader/> : <CF.table 
                    componentFactory = {CF} 
                    todos = {this.state.todos}
                    keys = {keys}
                    titles = {titles}
                    index = {true}
                    dataFunction = {posicion => console.log(this.state.todos[posicion])}
                />}
            </div>
        );
    }
}

export default TableController;