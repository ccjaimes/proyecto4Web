import React, { Component } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import './styles.css';
import NavLink from 'react-bootstrap/NavLink';
import {  BrowserRouter as Router,Route, Switch,Link } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

import Reportar from '../reportar';
import User from '../User/User';


class Page extends Component {

    state= {

        
    }
    logout() {
        this.props.auth.logout();
      }
    render() {
        return (
            <Router>
            <div>
            <div className="col-12">
                <div className="col-4 App_Aside">
                <ListGroup variant="flush">
                    <ListGroup.Item action>
                        <Link to={{ pathname:'/user', aboutProps:{auth: this.props.auth}}}>Perfil</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <NavLink to="/grupos">Grupos</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <Link to="/servicios">Servicios</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <Link to="/reportar">Reportar Robo</Link> 
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <NavLink onClick={this.logout.bind(this)}>Cerrar Sesión</NavLink> 
                    </ListGroup.Item>
                </ListGroup>
                </div>
                <div className="col-8 App_Form">
                <Switch>
                    <Route path='/user' auth={this.props.auth} component={User}/>
                    <Route path='/reportar' auth={this.props.auth} >
                        <Reportar></Reportar>
                    </Route>
                </Switch>
                </div>
            </div>
            </div>
            </Router>
        );
    }
}

export default Page;