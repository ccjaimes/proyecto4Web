import React, { Component } from 'react';

class Grupo extends Component {
    state = {
        grupos: []
    }
    componentWillMount() {
        fetch("/back/grupos/").then(res => res.json()).then(lista => {
            console.log(lista);
            this.setState({
                grupos: lista
            });
        });
    }
    deployList() {
        let final;
        for (let i = 0; i <= this.state.grupos.length; i += 3) {
            let retorno;
            let e1 = i === this.state.grupos.length ? -1 : this.state.grupos[i];
            let e2 = i + 1 < this.state.grupos.length ? this.state.grupos[i + 1] : i + 1 === this.state.grupos.length ? -1 : null;
            let e3 = i + 2 < this.state.grupos.length ? this.state.grupos[i + 2] : i + 2 === this.state.grupos.length ? -1 : null;
            if (e1 === -1) {
                retorno +=
                    <div className="col-12 col-md-4">
                        <div className="card border-success">
                            <h3>Crea un grupo</h3>
                            <button type="button" class="btn btn-success btn-circle btn-xl">+</button>
                        </div>
                    </div>;
            }
            else {
                retorno +=
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <h3>{e1.nombre}</h3>
                        </div>
                    </div>;
            }

            if (e2 !== null) {
                if (e2 === -1) {
                    retorno +=
                        <div className="col-12 col-md-4">
                            <div className="card border-success">
                                <h3>Crea un grupo</h3>
                                <button type="button" class="btn btn-success btn-circle btn-xl">+</button>
                            </div>
                        </div>;
                }
                else {
                    retorno +=
                        <div className="col-12 col-md-4">
                            <div className="card text-center">
                                <h3>{e2.nombre}</h3>
                            </div>
                        </div>
                }
            }
            if (e3 !== null) {
                retorno +=
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <h3>{e3.nombre}</h3>
                        </div>
                    </div>
            }
            final += <div className="row">{retorno}</div>;

        }
        return final;
    }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="display-4">Grupos disponibles</h1>
                {this.deployList()}
            </div>
        );
    }
}

export default Grupo;