import React, { Component } from 'react';
import {CardDeck} from 'react-bootstrap';
import Servicio from './servicio';

class ListServicios extends Component {

    constructor(props){
        super(props);
        console.log("voy1");
        this.state ={
            list : this.props.list
        }
    }

    renderServicios(){
        var j=[]
        for(var i=0; i<this.state.list.length;i++){
            j.push({id:this.state.list[i]})
        }
        console.log(j);
        console.log(this.state.list);
        return j.map((e,i) => ( 
            <Servicio value={e} key={i}></Servicio>
        ));
    }

    

    render() {
        return (
            <div>
                <CardDeck>
                    {this.renderServicios()}
                </CardDeck>
            </div>
        );
    }
}

export default ListServicios;