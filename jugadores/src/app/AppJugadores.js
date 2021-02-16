import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    // useHistory
} from "react-router-dom";
import TableController from '../controller/TableController';
import PanelController from '../controller/PanelController';
import FormController from '../controller/FormController';
import MultiTableController from '../controller/MultiTableController';
import Service from '../service/Service';
import {Equipos} from '../mock/Equipos';
import {Jugadores} from '../mock/Jugadores';
import {Torneos} from '../mock/Torneos';
import {Juegos} from '../mock/Juegos';
import {EquipoJugadores} from '../mock/EquipoJugadores';
import {Equipo, EquipoForm} from '../entity/Equipo';
import {Jugador, JugadorForm} from '../entity/Jugador';
import {Torneo, TorneoForm} from '../entity/Torneo';
import {Juego, JuegoForm} from '../entity/Juego';

class AppJugadores extends Component {

    state = {
        todos: Jugadores,
        entity: Jugador,
        dataForm: JugadorForm,
        title: 'Jugadores',
        index: -1,
        funcion: this.submit
    }

    setFocus = dataChange => this.setState({...this.state, ...dataChange})

    submit = data => {
        let todos = this.state.todos;
        Service.create(todos, data);
        this.setFocus({todos: todos});
        // alert('Dato Guardado');
    }

    delete = index => {
        let todos = this.state.todos;
        Service.delete(todos, index);
        this.setFocus({todos: todos});
    }

    update = data => {
        let todos = this.state.todos;
        Service.update(todos, this.state.index, data);
        this.setFocus({todos: todos});
        alert('Dato Guardado');
    }

    modifi = index => {
        this.setFocus({index: index, funcion: this.update});
    }

    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li onClick = {()=>this.setFocus({
                            todos: Jugadores,
                            entity: Jugador, 
                            dataForm: JugadorForm,
                            funcion: this.submit,
                            index: -1,
                            title: 'Jugadores'
                        })}>
                            <Link to="/table">Jugadores</Link>
                        </li>
                        <li onClick = {()=>this.setFocus({
                            todos: Equipos, 
                            entity: Equipo, 
                            dataForm: EquipoForm,
                            funcion: this.submit,
                            index: -1,
                            title: 'Equipos'
                        })}>
                            <Link to="/table">Equipos</Link>
                        </li>
                        <li>
                            <Link to="/panel">Panel</Link>
                        </li>
                        <li onClick = {()=>this.setFocus({
                            todos: Torneos, 
                            entity: Torneo, 
                            dataForm: TorneoForm,
                            funcion: this.submit,
                            index: -1,
                            title: 'Torneos'
                        })}>
                            <Link to="/table">Torneos</Link>
                        </li>
                        <li>
                            <Link to="/juegos">Juegos</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/form">
                            <FormController 
                                {...this.state}
                                index = {this.state.index}
                                submit = {this.state.funcion} 
                                retorno = {
                                    ()=><button onClick = {()=>this.setFocus(
                                            {index:-1,funcion:this.submit}
                                        )}>
                                            <Link to="/table">Atras</Link>
                                    </button>
                                }
                            />
                        </Route>
                        <Route path="/table">
                            <TableController {...this.state} 
                                options = {index => (<>
                                    <button onClick = {()=>this.modifi(index)}>
                                        <Link to="/form">Actualizar</Link>
                                    </button>
                                    <button onClick = {()=>this.delete(index)}>Borrar</button>
                                </>)}
                                adicionalComponent = {()=><button><Link to="/form">Add</Link></button>}
                                dataFunction = {
                                    this.state.title === 'Equipos' && (index => this.setFocus({
                                        todos: Service.searchById(EquipoJugadores, 'id_equipo', Jugadores, 'id_jugador', Equipos[index].id),
                                        entity: Jugador, 
                                        dataForm: JugadorForm,
                                        funcion: this.submit,
                                        index: -1,
                                        title: 'Jugadores'
                                    }))
                                }
                            />
                        </Route>
                        <Route path="/panel">
                            <PanelController 
                                title = 'Agregar Jugadores' 
                                // useHistory = {useHistory}
                                mainTodos = {EquipoJugadores}
                                firstTodos = {{
                                    todos: Equipos,
                                    entity: Equipo, 
                                    dataForm: EquipoForm, 
                                    title: 'Equipos'
                                }}
                                secondTodos = {{
                                    todos: Jugadores, 
                                    entity: Jugador, 
                                    dataForm: JugadorForm, 
                                    title: 'Jugadores'
                                }}
                                unitTodos = {EquipoJugadores}
                                service = {Service}
                            />
                        </Route>
                        <Route path="/juegos">
                            <MultiTableController
                                arrTodos = {[Torneos, Juegos, Equipos]}
                                arrDataForm = {[TorneoForm, JuegoForm, EquipoForm]}
                                arrEntity = {[Torneo, Juego, Equipo]}
                                arrTitle = {['Torneos', 'Juegos', 'Equipos']}
                                title = {'Juegos'}
                                service = {Service}
                            />
                        </Route>
                        <Route path="/">
                            <h1>Home Page</h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppJugadores;