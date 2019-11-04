import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
            <div>
                <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">Bicicletas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} href="#home">Home</Nav.Link>
                    <Nav.Link as={Link} href="#registrarse">Registrarse</Nav.Link>
                    <Nav.Link as={Link} href="#login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                </div>
                <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={User}/>
                    <Route path='/registrar' component={Registrar}/>
                </Switch>
                </div>
            </div>
        );
    }
}

export default Home;