import React, {Component} from 'react';

class Boton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

        // this.sumar = this.sumar.bind(this);
    }

    // sumar = () => this.setState({...this.state, count: this.state.count+1})

    // sumar = () => this.setState(state => ({count: state.count + 1}))

    sumar() {
        return () => this.setState(state => ({count: state.count + 1}))
    }

    // resta = () => this.setState(state => ({count: state.count - 1}))

    resta(){
        return () => this.setState(state => ({count: state.count - 1}))
    }

    // resetear = () => this.setState(state => ({count: 0}))

    resetear(){
        return () => this.setState(state => ({count: 0}))
    }

    contador = () => {
        if(this.state.count == 0){
          return "cero"
        }
        return this.state.count
    }

    render(){
        return(
            <div>
                <h1>{this.contador()}</h1>
                <button onClick={this.sumar()}>Incrementar</button>
                <button onClick={this.resta()}>Reducir</button>
                <button onClick={this.resetear()}>Resetear</button>
                {/* <h1>{this.props.aaa}</h1> */}
            </div>
        )
    }
}

export default Boton;