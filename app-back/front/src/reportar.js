import React, { Component } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

class Reportar extends Component {

    constructor(){
        this.state ={
            show = false, 
            marca = '',
            tipo = '',
            color = '',
            tamano = '',
            direccion = '',
        }
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
            <div className="row">
                <div className="col-12 ">
                    <div style={{ display: "flex",
                justifyContent: "center",
                alignItems: "center"}}>
                        <div className="card text-center mx-auto">
                            <div className="card-body" style={{backgroundColor: '#FFC49B'}}>
                                <Button variant="outline-danger" onChange={this.handleShow}>Danger</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={handleClose}>
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
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                    Reportar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Reportar;