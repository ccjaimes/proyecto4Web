import React, { Component } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import './styles.css';
import NavLink from 'react-bootstrap/NavLink';
import {  BrowserRouter as Router,Route, Switch,Link } from 'react-router-dom';
import {ListGroup, Row, Container, Col} from 'react-bootstrap';

import Reportar from '../reportar';
import Grupo from '../Grupo/grupo';
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
            <Container>
            <Row>
            <Col xs={12} md={4} lg={4} className="App__Aside">
                
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
                </Col>
                <Col xs={12} md={8} lg={8} className="col-8 App__Form">
                <Switch>
                    <Route path='/user' auth={this.props.auth} component={User}/>
                    <Route path='/reportar' auth={this.props.auth} >
                        <Reportar></Reportar>
                    </Route>
                    <Route path="/grupos">
                        <Grupo></Grupo>
                    </Route>
                </Switch>
                </Col>
            </Row>
            </Container>
            </Router>
        );
    }
}

export default Page;