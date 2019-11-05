import React, { Component } from 'react';
import {CardDeck} from 'react-bootstrap';
import Servicio from './servicio';

class ListServicios extends Component {

    constructor(props){
        super(props);
        this.state ={
            list : this.props.list
        }
    }

    renderServicios(){
        return this.state.list.map((e,i) => ( 
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