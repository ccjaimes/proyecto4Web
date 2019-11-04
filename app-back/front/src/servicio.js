import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class Servicio extends Component {

    constructor(){
        this.state={
            nombre:this.props.value.nombre,
            tipo:this.props.value.tipo
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Card.Title>
                        {this.state.nombre}
                    </Card.Title>
                    <Card.Text>
                        {this.state.tipo}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Servicio;