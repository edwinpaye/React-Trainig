import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    // useRouteMatch,
    // useParams
} from "react-router-dom";
import TableController from '../controller/TableController';
import FormController from '../controller/FormController';

class Tienda extends Component {

    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tabla">Tabla</Link>
                        </li>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/form">
                            <FormController />
                        </Route>
                        <Route path="/tabla">
                            <TableController />
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

export default Tienda;