import React, { Component } from 'react';

class Grupo extends Component {
    state={
    }
    componentWillMount(){
        fetch("/back/grupos/").then(res=> res.json()).then(lista => {
            console.log(lista);
            this.setState({
                grupos:lista
            });
        });
    }
    render() {
        return (
            <h1>Grupos disponibles</h1>
        );
    }
}

export default Grupo;