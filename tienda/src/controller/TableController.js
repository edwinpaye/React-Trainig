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

    render(){
        // titles.splice(0, 1);
        // titles.unshift('posicion');
        const keys = this.state.todos.length !== 0 ? Object.keys(this.state.todos[0]) : [];
        const titles = ['id', 'Nobre de Usuario', 'Password', 'Direccion', 'C.I.', 'Email', 'Cargo'];

        return (
            <div>
                <h2>{this.state.todos.length === 0 ? 'No hay contenido' : 'Lista de Prueba'}</h2>
                
                {this.state.load ? <CF.preloader/> : <CF.table 
                    componentFactory = {CF} 
                    todos = {this.state.todos}
                    keys = {keys}
                    titles = {titles} 
                    dataFunction = {posicion => console.log(this.state.todos[posicion])}
                />}
            </div>
        );
    }
}

export default TableController;