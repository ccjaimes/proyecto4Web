import React, { Component } from 'react';

class Taller extends Component {
    state = {
        talleres: []
    }
    UNSAFE_componentWillMount() {
        fetch("/back/talleres/").then(res => res.json()).then(lista => {
            this.setState({
                talleres: lista
            });
        });
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
                        <div className="card border-success">
                            <h3>Crea un grupo</h3>
                            <button type="button" className="btn btn-success btn-circle btn-xl">+</button>
                        </div>
                </div>);
            }
            else {
                retorno.push(
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <h3>{e1.nombre}</h3>
                        </div>
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
                            <div className="card text-center">
                                <h3>{e2.nombre}</h3>
                            </div>
                        </div>);
                }
            }
            if (e3 !== null) {
                if (e3 === -1) {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <div className="card border-success">
                                <h3>Crea un grupo</h3>
                                <button type="button" className="btn btn-success btn-circle btn-xl">+</button>
                            </div>
                    </div>);
                }
                else {
                    retorno.push(
                        <div className="col-12 col-md-4">
                            <div className="card text-center">
                                <h3>{e3.nombre}</h3>
                            </div>
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
                {this.deployList().map((e)=>{
                    return e;
                })}
            </div>
        );
    }
}

export default Taller;