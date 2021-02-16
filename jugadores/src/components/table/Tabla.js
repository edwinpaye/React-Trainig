import React from 'react';
import './Tabla.css';

export default function Tabla({
    componentFactory, todos, keys, titles, dataFunction, index = false, options
}){

    return (
        <table>
            <tbody>
                <componentFactory.tableHeader titles = {titles}/>
                <componentFactory.tableBody 
                    todos = {todos} 
                    keys = {keys} 
                    method = {dataFunction} 
                    index = {index}
                    options = {options}
                />
            </tbody>
        </table>
    );
}