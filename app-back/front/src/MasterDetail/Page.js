import React, { Component } from 'react';
import './styles.css';
import NavLink from 'react-bootstrap/NavLink';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ListGroup, Row, Col } from 'react-bootstrap';

import Reportar from '../reportar';
import Grupo from '../Grupo/grupo';
import User from '../User/User';
import ListRobos from '../listRobos';


class Page extends Component {

    state = {


    }

    togo() {
        console.log("voy")
            ; this.preventDefault();
    }
    logout() {
        this.props.auth.logout();
    }


    handleOnClick = () => {
        console.log("voy");
        window.location.assign("/user");


    }
    render() {
        return (

            
                <Router>
                    <Row>
                        <Col xs={12} md={3} lg={3} className="App__Aside">
                            <ListGroup variant="flush" className="text-center">
                                
                                <ListGroup.Item action className="List__Group" >
                                    <h5 style={{ color: '#D90429' }}>Bicicletas</h5>
                                </ListGroup.Item>
                                
                                <Link to={{ pathname: '/user', aboutProps: { auth: this.props.auth } }} >
                                    <ListGroup.Item action className="List__Group"  >
                                        <h5 style={{ color: '#D90429' }}>Perfil</h5>
                                    </ListGroup.Item>
                                </Link>
                                <Link to="/grupos" style={{ color: '#D90429' }}>
                                    <ListGroup.Item action className="List__Group"  >
                                        <h5 style={{ color: '#D90429' }}>Grupos</h5>
                                    </ListGroup.Item>
                                </Link>


                                <Link to="/reportar" style={{ color: '#D90429' }}>
                                    <ListGroup.Item action className="List__Group"  >
                                        <h5 style={{ color: '#D90429' }}>Reportar Robo</h5>
                                    </ListGroup.Item>

                                </Link>

                                <Link to="/robos" style={{ color: '#D90429' }}>

                                    <ListGroup.Item action className="List__Group"  >
                                        <h5 style={{ color: '#D90429' }}>Mis reportes</h5>
                                    </ListGroup.Item>

                                </Link>


                                <ListGroup.Item action className="List__Group" >
                                    <NavLink onClick={this.logout.bind(this)} style={{ color: '#D90429' }}><h5 style={{ color: '#D90429' }}>Cerrar Sesión</h5></NavLink>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={9} lg={9} className="col-8 App__Form">
                            <Switch>
                                <Route exact path='/page/' ><User auth={this.props.auth}></User></Route>

                                <Route path='/user'  ><User auth={this.props.auth}></User></Route>
                                <Route path='/reportar' auth={this.props.auth} >
                                    <Reportar></Reportar>
                                </Route>
                                <Route path="/grupos">
                                    <Grupo></Grupo>
                                </Route>
                                <Route path="/robos">
                                    <ListRobos></ListRobos>
                                </Route>
                            </Switch>
                        </Col>

                    </Row>
                </Router>

        );
    }
}

export default Page;