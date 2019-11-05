
import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Inicio from './inicio';

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
    
      componentDidMount() {
        const { renewSession } = this.props.auth;
    
        if (localStorage.getItem('isLoggedIn') === 'true') {
          renewSession();
        }
      }
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
            {
              !isAuthenticated() && (
                <div >
                <div style={{paddingTop: "50px"}}>
            
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Bicicletas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link onClick={this.signup.bind(this)}>Registrarse</Nav.Link>
                <Nav.Link onClick={this.login.bind(this)}>Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
       
            <Switch>
                 <Route exact path='/' >

                   <Inicio auth={this.props.auth}></Inicio>
                 </Route>
                 <Route path="/talleres">
                 </Route>
            </Switch>
        </div>
                 
                )
               
            }
            </div>
        );
    }
}

export default Home;