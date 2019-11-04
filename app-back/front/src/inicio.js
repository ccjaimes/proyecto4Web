import React, { Component } from 'react';
import Background from './images/Imagen.jpg';
import {Col, Card, Row} from 'react-bootstrap';


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
                <Col md={{ span: 3, offset: 4 }} style={{display: "flex",
                align_items: "center",
                justify_content: "center"}}>
                    <Card>
                        <Card.Body>
                        <Card.Title>
                            Bienvenido a PineBicis
                        </Card.Title>
                        <Card.Text>
                            En nuestro sitio tienes la oportunidad de conocer mas personas amantes de las bicis como tu 
                        </Card.Text>
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