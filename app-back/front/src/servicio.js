import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class Servicio extends Component {

    UNSAFE_componentWillMount()
    {
         let id=this.props.value.id;
             fetch("/servicios/"+id, {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              }).then(data=>(data.json()).then(t=> {this.setState({id:id, nombre: t.nombre, tipo:t.tipo}) }))
    }
    constructor(props){
        super(props);
        console.log("voy2");

        this.state={
            id:this.props.value.id,
            nombre:"",
            tipo:""
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