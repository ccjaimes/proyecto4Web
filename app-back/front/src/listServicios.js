import React, { Component } from 'react';
import {CardDeck} from 'react-bootstrap';
import Servicio from './servicio';

class ListServicios extends Component {

    constructor(){
        this.state ={
            list : []
        }
    }

    componentWillMount() {
        fetch("/servicios/").then(res => res.json()).then(lista => {
            console.log(lista);
            this.setState({
                list: lista
            });
        });
    }
    renderServicios(){
        return this.state.listRobos.map((e,i) => ( 
            <Servicio value={e} key={i}></Servicio>
        ));
    }

    render() {
        return (
            <div>
                <CardDeck>
                    {this.renderServicios()}
                </CardDeck>
            </div>
        );
    }
}

export default ListServicios;