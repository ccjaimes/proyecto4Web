
import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Home extends Component {
    
      signup() {
        this.props.auth.signup();
      }
    
      login() {
        this.props.auth.login();
      }
      logout() {
        this.props.auth.logout();
      }
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
            <div>
            {
              !isAuthenticated() && (
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Bicicletas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onClick={this.signup.bind(this)}>Registrarse</Nav.Link>
                <Nav.Link onClick={this.login.bind(this)}>Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
                 
                )
            }
               
            {
              isAuthenticated() && (
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Bicicletas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onClick={this.logout.bind(this)}>Cerrar Sesion</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
                )
            }
            
            
           

</div>
                <div>
               
                </div>
            </div>
        );
    }
}

export default Home;