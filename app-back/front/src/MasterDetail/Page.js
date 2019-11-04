import React, { Component } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import './styles.css';
import NavLink from 'react-bootstrap/NavLink';
import {ListGroup} from 'react-bootstrap';



class Page extends Component {

    state= {

        
    }
    logout() {
        this.props.auth.logout();
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
                    <ListGroup.Item action>
                        <NavLink onClick={this.logout.bind(this)}>Cerrar Sesión</NavLink> 
                    </ListGroup.Item>
                </ListGroup>
                </div>
                
            </div>
            </div>
        );
    }
}

export default Page;