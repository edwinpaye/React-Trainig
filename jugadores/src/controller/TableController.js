import React, { Component } from 'react';
import CF from '../factory/ComponentFactory';
import Service from '../service/Service';

class TableController extends Component {

    state = {
        value: ''
    }

    getObjectKeys = () => {
        let keys = Object.keys(this.props.todos[0]);
        // keys.indexOf('id') <! 0 && keys.splice(keys.indexOf('id'), 1);
        let keywWithoutId = keys.reduce((result, item) => {
            (item !== 'id' & !item.includes('_id')) && result.push(item);
            return result;
        }, []);
        return keywWithoutId;
    }

    setFilter = e => {
        const {value} = e.target
        this.setState({value: value});
    }

    render(){
        const keys = this.props.todos.length !== 0 ? this.getObjectKeys() : [];
        const titles = this.props.entity.propiedades.reduce((result, item) => {
            (item.key !== 'id' & !item.key.includes('_id')) && result.push(item.name);
            return result;
        }, []);
        titles.unshift('Nro.');
        this.props.options && titles.push('Opciones');

        return (
            <div>
                <h2>
                    {this.props.todos.length === 0 ? 'No hay contenido' : `Lista de ${this.props.title}`}
                </h2>
                <fieldset>
                    <legend>Busqueda</legend>
                    <label>Buscar: </label>
                    <input type="text" onChange = {this.setFilter} value = {this.state.value}></input>
                </fieldset>
                <CF.table 
                    componentFactory = {CF} 
                    todos = {Service.search(
                        this.props.todos, this.props.dataForm, this.state.value
                    ).map(val=>this.props.todos[val])}
                    keys = {keys}
                    titles = {titles}
                    index = {true}
                    dataFunction = {this.props.dataFunction}
                    options = {this.props.options}
                />
                {this.props.adicionalComponent && this.props.adicionalComponent()}
            </div>
        );
    }
}

export default TableController;