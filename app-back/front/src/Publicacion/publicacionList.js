import React, { Component } from 'react';
import PublicacionCard from '../publicacionCard';

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
                           {this.state.list.map((e,i)=>
                               
                              <PublicacionCard value={e} key={i}></PublicacionCard>
                            )}

            </div>
        );
    }
}



export default PublicacionList;