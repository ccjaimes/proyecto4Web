import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import Robo from './robo';

class ListRobos extends Component {

    constructor(){
        this.state={
            listRobos = []
        }
    }

    render() {
        return (
            <div>
                <CardDeck>
                    {this.state.listRobos.map((e,i)=>{
                        <Robo value={e} key={i}></Robo>
                    })}
                </CardDeck>
            </div>
        );
    }
}

export default ListRobos;