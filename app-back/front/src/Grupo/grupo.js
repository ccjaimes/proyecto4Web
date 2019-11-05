import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Grupo extends Component {
    state = {
        grupos: []
    }
    UNSAFE_componentWillMount() {
        fetch("/back/grupos/").then(res => res.json()).then(lista => {
            this.setState({
                grupos: lista
            });
        });
    }
    deployList() {
        let final = [];
        for (let i = 0; i <= this.state.grupos.length; i += 3) {
            let retorno = [];
            let e1 = i === this.state.grupos.length ? -1 : this.state.grupos[i];
            let e2 = i + 1 < this.state.grupos.length ? this.state.grupos[i + 1] : i + 1 === this.state.grupos.length ? -1 : null;
            let e3 = i + 2 < this.state.grupos.length ? this.state.grupos[i + 2] : i + 2 === this.state.grupos.length ? -1 : null;
            if (e1 === -1) {
                retorno.push(
                    <div className="col-12 col-md-4">
                        <div className="card border-success">
                            <h3>Crea un grupo</h3>
                            <button type="button" class="btn btn-success btn-circle btn-xl">+</button>
                        </div>
                    </div>);
            }
            else {
                retorno.push(
                    <div className="col-12 col-md-4">
                        <Link to={"/grupos/" + e1._id}>
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
                            <div className="card border-success">
                                <h3>Crea un grupo</h3>
                                <button type="button" class="btn btn-success btn-circle btn-xl">+</button>
                            </div>
                        </div>);
                }
                else {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <Link to={"/grupos/" + e2._id}>
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
                            <div className="card border-success">
                                <h3>Crea un grupo</h3>
                                <button type="button" class="btn btn-success btn-circle btn-xl">+</button>
                            </div>
                        </div>);
                }
                else {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <Link to={"/grupos/" + e3._id}>
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
                <h1 className="display-4">Grupos disponibles</h1>
                {this.deployList().map((e) => {
                    return e;
                })}
            </div>
        );
    }
}

export default Grupo;