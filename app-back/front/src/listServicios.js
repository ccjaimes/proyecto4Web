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

    render() {
        return (
            <div>
                <CardDeck>
                    {this.state.list.map((e,i)=>   
                        <Servicio value={e} key={i}></Servicio>
                    )}
                </CardDeck>
            </div>
        );
    }
}

export default ListServicios;