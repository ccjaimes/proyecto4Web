import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';

class Taller extends Component {
    constructor() {
        super();
        this.state = {
            show:false,
            talleres: [],
            nombre: '',
            direccion: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UNSAFE_componentWillMount() {
        fetch("/back/talleres/").then(res => res.json()).then(lista => {
            this.setState({
                talleres: lista
            });
        });
    }
    handleShow=()=>{
        console.log(this.state.show)
        this.setState({
            show : true
        })
    }

    handleClose =() =>{
        this.setState({
            show: false
        })
    }


    handleSubmit(e) {
        var data = { nombre: document.getElementById("nombre").value, direccion: document.getElementById("direc").value }
        console.log(data);
        fetch('/back/talleres/', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));   
    }
    DeployForm() {

        return <> <Button variant="success" onClick={() => this.handleShow()}>+</Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea un Taller</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="direc">
                            <Form.Label>Dirección:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Cancelar</Button>
                    <Button variant="success"onClick={this.handleSubmit}>Crear taller</Button>
                </Modal.Footer>
            </Modal>
            </>; 
    }
    deployList() {
        let final = [];
        for (let i = 0; i <= this.state.talleres.length; i += 3) {
            let retorno = [];
            let e1 = i === this.state.talleres.length ? -1 : this.state.talleres[i];
            let e2 = i + 1 < this.state.talleres.length ? this.state.talleres[i + 1] : i + 1 === this.state.talleres.length ? -1 : null;
            let e3 = i + 2 < this.state.talleres.length ? this.state.talleres[i + 2] : i + 2 === this.state.talleres.length ? -1 : null;
            if (e1 === -1) {
                retorno.push(
                    <div className="col-12 col-md-4">
                        <div className="card border-success text-center">
                            <h3>Crea un Taller</h3>
                            {this.DeployForm()}
                        </div>
                    </div>);
            }
            else {
                retorno.push(
                    <div className="col-12 col-md-4">
                        <Link to={"/talleres/" + e1._id}>
                            <div className="card text-center py-3">
                                <h3>{e1.nombre}</h3>
                            </div>
                        </Link>
                    </div>);
            }

            if (e2 !== null) {
                if (e2 === -1) {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <div className="card border-success text-center">
                                <h3>Crea un Taller</h3>
                                {this.DeployForm()}
                            </div>
                        </div>);
                }
                else {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <Link to={"/talleres/" + e2._id}>
                                <div className="card text-center py-3">
                                    <h3>{e2.nombre}</h3>
                                </div>
                            </Link>
                        </div>);
                }
            }
            if (e3 !== null) {
                if (e3 === -1) {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <div className="card border-success text-center">
                                <h3>Crea un Taller</h3>
                                {this.DeployForm()}
                            </div>
                        </div>);
                }
                else {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <Link to={"/talleres/" + e3._id}>
                                <div className="card text-center py-3">
                                    <h3>{e3.nombre}</h3>
                                </div>
                            </Link>
                        </div>);
                }
            }
            final.push(<div className="row">{retorno}</div>);
        }
        return final;
    }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="display-4">Talleres</h1>
                {this.deployList().map((e) => {
                    return e;
                })}
            </div>
        );
    }
}

export default Taller;