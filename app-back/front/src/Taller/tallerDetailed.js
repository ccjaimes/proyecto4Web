import React, { Component } from 'react';
import ListServicios from '../listServicios';
import ProductoList from '../Producto/productoList';

class TallerDetailed extends Component {
   
      
    UNSAFE_componentWillMount()
    {
         let idTaller=this.props.match.params.id;
             fetch("/back/talleres/"+idTaller, {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              }).then(data=>(data.json()).then(taller=> {this.setState({taller:taller, productosTaller: taller.productos, serviciosTaller:taller.servicios}) }))
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
                        <ProductoList list = {this.state.productosTaller}></ProductoList>
                    </div>
                    {console.log(this.state)}

                    <div className="col-6">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                        <h1>{this.state.taller.nombre}</h1>
                        <hr className="my-4"></hr>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item "><strong>Hora de Atencion :</strong> {this.state.taller.horaAtencion}</li>
                             <li className="list-group-item "><strong>Direccion :</strong> {this.state.taller.direccion}</li>
                            <li className="list-group-item "><strong>Servicios disponibles :</strong> {this.state.serviciosTaller.length}</li>
                            <li className="list-group-item "><strong>Productos disponibles :</strong>     {this.state.productosTaller.length}   </li>
                        </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <h2>Servicios</h2>
                        <ListServicios list={this.state.serviciosTaller}></ListServicios>
                    </div>

                </div>
               
            </div>
        );
    }
}

export default TallerDetailed;