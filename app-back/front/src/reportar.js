import React, { Component } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { Card, Row } from 'react-bootstrap';

class Reportar extends Component {

    state ={
            show : false, 
            marca : '',
            tipo : '',
            color : '',
            tamano : '',
            direccion : '',
        }
    

    handleShow=()=>{
        this.setState({
            show : true
        })
    }

    handleClose =() =>{
        this.setState({
            show: false
        })
    }

    handleSubmit = e =>{
        e.preventDefault();

         

        this.setState({
            show:false
        })
    }



    render() {
        return (
            <Row>
               <Card text="white">
                   <Card.Body style={{backgroundColor: '#EF233C'}}>
                      <Card.Title>
                           Reportar un Robo
                    </Card.Title>
                    <Button variant="outline-danger" onChange={this.handleShow}>Danger</Button>
                    </Card.Body>
                </Card>
                    
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Reporte de Robo </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Por favor, ingresa la información de tu bicicleta</Modal.Body>

                    <Form>
                        <Form.Group controlId="formGroupMarca">
                            <Form.Label>Marca de la bicicleta</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Trek" inputRef={ref => { this.setState({marca: ref}) }}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupTipo">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" placeholder="Ej: BMX" inputRef={ref => { this.setState({tipo: ref}) }} />
                        </Form.Group>
                        <Form.Group controlId="formGroupColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Rojo" inputRef={ref => { this.setState({color: ref}) }}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupTamanho">
                            <Form.Label>Tamaño de la bicicleta</Form.Label>
                            <Form.Control as="select" inputRef={ref => { this.setState({tamano: ref}) }}>
                                <option>Alta</option>
                                <option>Mediana</option>
                                <option>Baja</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupDireccion">
                            <Form.Label>Por favor, ingresa la direccion en la que te robaron la bicicleta</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Carrera 63 # 1" inputRef={ref => { this.setState({direccion: ref}) }}/>
                        </Form.Group>
                    </Form>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.statehandleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Reportar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        );
    }
}

export default Reportar;