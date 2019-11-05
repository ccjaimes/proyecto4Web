import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Taller extends Component {
    constructor() {
        super();
        this.state = {
            talleres: [],
            nombre: '',
            direccion: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UNSAFE_componentWillMount() {
        fetch("/back/talleres/").then(res => res.json()).then(lista => {
            this.setState({
                talleres: lista
            });
        });
    }
    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        var data = { nombre: this.state.nombre, direccion: this.state.direccion }
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
    deployForm() {
        return;
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
                            <button type="button" className="btn btn-success btn-circle btn-xl" data-toggle="modal" data-target="#crear">+</button>
                            <div className="modal fade" id="crear" tabindex="-1" role="dialog" aria-labelledby="crearlabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="crearlabel">Crea un Taller</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={this.handleSubmit}>
                                                <div class="form-group">
                                                    <label for="nombre" class="col-form-label">Nombre:</label>
                                                    <input type="text" class="form-control" id="nombrefield" value={this.state.nombre} onChange={this.handleChange} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="direccion" class="col-form-label">Dirección:</label>
                                                    <input type="text" class="form-control" id="direccionfield" value={this.state.direccion} onChange={this.handleChange} />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-primary">Crear taller</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <button type="button" className="btn btn-success btn-circle btn-xl" data-toggle="modal" data-target="#crear">+</button>
                                <div className="modal fade" id="crear" tabindex="-1" role="dialog" aria-labelledby="crearlabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="crearlabel">Crea un Taller</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div class="form-group">
                                                        <label for="nombre" class="col-form-label">Nombre:</label>
                                                        <input type="text" class="form-control" id="nombrefield" value={this.state.nombre} onChange={this.handleChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="direccion" class="col-form-label">Dirección:</label>
                                                        <input type="text" class="form-control" id="direccionfield" value={this.state.direccion} onChange={this.handleChange} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                <button type="button" className="btn btn-primary">Crear taller</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <button type="button" className="btn btn-success btn-circle btn-xl" data-toggle="modal" data-target="#crear">+</button>
                                <div className="modal fade" id="crear" tabindex="-1" role="dialog" aria-labelledby="crearlabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="crearlabel">Crea un Taller</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div class="form-group">
                                                        <label for="nombre" class="col-form-label">Nombre:</label>
                                                        <input type="text" class="form-control" id="nombrefield" value={this.state.nombre} onChange={this.handleChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="direccion" class="col-form-label">Dirección:</label>
                                                        <input type="text" class="form-control" id="direccionfield" value={this.state.direccion} onChange={this.handleChange} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                <button type="button" className="btn btn-primary">Crear taller</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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