import React, { Component } from 'react';
import PublicacionCard from './publicacionCard';
class PublicacionList extends Component {
    
    state={
        list: []
    }
    
    componentDidMount(){

        fetch("/publicaciones/").then(res => res.json()).then(m=>{console.log(m);this.setState({
            list:m
            
        })});
    }
   
    
    
    render() {
        
        return (
            <div className="row">
                <div className="container">
                    <h2>Publicaciones</h2>
                           {this.state.list.map((e,i)=>
                              <PublicacionCard value={e} key={i}></PublicacionCard>
                            )}
                    <h2>Hola</h2>


            </div>
            </div>
        );
    }
}



export default PublicacionList;