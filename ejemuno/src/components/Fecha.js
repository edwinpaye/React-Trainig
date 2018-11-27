import React, {Component} from 'react';

class Fecha extends React.Component {

    constructor(props){
        super(props);
    }

    // getFecha(date){
    //     return (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
    // }

    render(){
        var date = new Date(parseInt(this.props.timestamp, 10));
        return (
            <div>
                <span>{date.getDay()}</span>
                <h1>{date.getTime()}</h1>
            </div>
        )
    }
}

export default Fecha;