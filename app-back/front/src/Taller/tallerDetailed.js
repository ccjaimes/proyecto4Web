import React, { Component } from 'react';
import ListServicios from '../listServicios';

class TallerDetailed extends Component {
   
      
    componentWillMount()
    {
         let idTaller=this.props.match.params.id;
             fetch("/back/talleres/"+idTaller, {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              }).then(data=>(data.json()).then(taller=> {this.setState({taller:taller, productosTaller: taller.productos.length, serviciosTaller:taller.servicios.length}) }))
    }

    constructor(props)
    {
        super(props);
        this.state={
            taller:{},
            productosTaller:[],
            serviciosTaller:[]
        }
    }
    render() {
        
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h2>Productos</h2>
                    </div>

                    <div className="col-6">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                        <h1>{this.state.taller.nombre}</h1>
                        <hr className="my-4"></hr>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item "><strong>Hora de Atencion :</strong> {this.state.taller.horaAtencion}</li>
                             <li className="list-group-item "><strong>Direccion :</strong> {this.state.taller.direccion}</li>
                            <li className="list-group-item "><strong>Servicios disponibles :</strong> <ListServicios list={this.state.serviciosTaller}></ListServicios></li>
                            <li className="list-group-item "><strong>Productos disponibles :</strong> {this.state.productosTaller}</li>
                        </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <h2>Servicios</h2>
                    </div>

                </div>
               
            </div>
        );
    }
}

export default TallerDetailed;