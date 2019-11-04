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
            
            <Container style={{max_width: '100%'}}>
                <Router>
            <Row>
            <Col xs={12} md={4} lg={4} className="App__Aside">
                
                <ListGroup variant="flush">
                    <ListGroup.Item action  className="List__Group" >
                        <Link to={{ pathname:'/user', aboutProps:{auth: this.props.auth}}} style={{ color: '#D90429' }}>Perfil</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action  className="List__Group" >
                        <Link to="/grupos" style={{ color: '#D90429' }}>Grupos</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action  className="List__Group" >
                        <Link to="/servicios" style={{ color: '#D90429' }}>Servicios</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action  className="List__Group" >
                        <Link to="/reportar" style={{ color: '#D90429' }}>Reportar Robo</Link> 
                    </ListGroup.Item>
                    <ListGroup.Item action  className="List__Group" >
                        <NavLink onClick={this.logout.bind(this)} style={{ color: '#D90429' }}>Cerrar Sesión</NavLink> 
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col xs={12} md={8} lg={8} className="col-8 App__Form">
                <Switch>
                    <Route path='/user' auth={this.props.auth} ><User auth={this.props.auth}></User></Route>
                   <Route path='/reportar' auth={this.props.auth} >
                        <Reportar></Reportar>
                    </Route>
                    <Route path="/grupos">
                        <Grupo></Grupo>
                    </Route>
                </Switch>
                </Col>
                
            </Row>
            </Router>
            </Container>
            
        );
    }
}

export default Page;