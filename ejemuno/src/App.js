import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton'
import BotonDos from './components/Boton'
import Fecha from './components/Fecha'

class App extends Component {

  sumaCounts(){
    return Boton.prototype.resta
  }

  variable(){
    return 0;
  }

  render() {
    var dato = this.sumaCounts();
    var nomero = 0;
    return (
      <div className="App">
        <h1>Total: {dato}</h1>
        <Boton aaa='ana'></Boton>
        <BotonDos aaa='1'></BotonDos>
        <Fecha></Fecha>
        {/* <button onClick={this.sumaCounts()}>Prueva</button> */}
        {/* <h1>{BotonDos.aaa}</h1> */}
      </div>
    );
  }
}

export default App;
