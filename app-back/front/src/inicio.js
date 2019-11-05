import React, { Component } from 'react';
import Background from './images/Imagen.jpg';
import {Col, Card, Row, Button} from 'react-bootstrap';


var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + Background + ")",
  };

class Inicio extends Component {
    render() {
        return (
            <div>
             <section style={ sectionStyle } >
                 <Row>
                     <Col></Col>
                 </Row>
                 <Row>
                <Col md={4}></Col>
                <Col md={{ span: 3, offset: 4 }} style={{position: "absolute",
	top:"160px",
	bottom: "0px",
	left: "400px",
	right: "50px",}}>
                    <Card>
                        <Card.Body>
                        <Card.Title>
                            Bienvenido a PineBicis
                        </Card.Title>
                        <Card.Text>
                            En nuestro sitio tienes la oportunidad de conocer mas personas amantes de las bicicletas como tu.
                        </Card.Text>
                        <Card.Text>
                            Registrate ya!
                        </Card.Text>
                        <Button>Registrate</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>

             </section>
            </div>
        );
    }
}

export default Inicio;