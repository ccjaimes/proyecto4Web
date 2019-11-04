import React, { Component } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import './styles.css';
import NavLink from 'react-bootstrap/NavLink';
import { Route, Switch,Link } from 'react-router-dom';

import Reportar from '../reportar';
import User from '../User/User';


class Page extends Component {

    constructor(){
        this.state= {

        }
    }
    render() {
        return (
            <div>
            <div className="col-12">
                <div className="col-4 App_Aside">
                <ListGroup variant="flush">
                    <ListGroup.Item action>
                        <NavLink to="/user">Perfil</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <NavLink to="/grupos">Grupos</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <NavLink to="/servicios">Servicios</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <NavLink to="/reportar">Reportar Robo</NavLink> 
                    </ListGroup.Item>
                </ListGroup>
                </div>
                <div className="col-8 App_Form">
                <Switch>
                    <Route exact path='/user' component={User}/>
                    <Route path='/reportar' component={Reportar}/>
                </Switch>
                </div>
            </div>
            </div>
        );
    }
}

export default Page;