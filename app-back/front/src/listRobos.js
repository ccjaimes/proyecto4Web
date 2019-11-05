import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import Robo from './robo';

class ListRobos extends Component {

    constructor(){
        super();
        this.state={
            listRobos : []
        }
    }

    componentWillMount() {
        var str ="/robos/" + localStorage.getItem("user")
        fetch(str).then(res => res.json()).then(lista => {
            console.log(lista);
            this.setState({
                listRobos: lista
            });
        });
    }

    renderRobos() {
        return this.state.listRobos.map((e,i) => ( 
            <Robo value={e} key={i}></Robo>
        ));
      }

    render() {
        return (
            <div>
                <CardDeck>
                    {this.renderRobos()}
                </CardDeck>
            </div>
        );
    }
}

export default ListRobos;