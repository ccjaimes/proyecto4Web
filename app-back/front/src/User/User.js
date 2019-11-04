import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class User extends Component {
    state={
        
            sub: "",
            nickname: "",
            name: "",
            picture: "",
            updated_at: "",
            email: "",
            email_verified: ""
        
    }
  componentDidMount() {
      console.log(this.props.location.aboutProps.auth);
      this.setState(this.props.location.aboutProps.auth.user);
    
    
  }
  login() {
    this.props.location.aboutProps.auth.login();
  }

  logout() {
    this.props.location.aboutProps.auth.logout();
  }

  render() {
    console.log(this.props.location.aboutProps);
     
      console.log(this.props.location.aboutProps.auth.user);
     
    const { isAuthenticated } = this.props.location.aboutProps.auth;
    return (
      <div className="container">
          {
          isAuthenticated() && (
              
            
        
        <div className="row">
            
                <div className="col-3">
                <img src={this.state.picture} className="img-fluid" alt="Institution" width="300" height="300"></img>

                </div>
                <div className="col-7">
                <div className="row">
                <div className="col-4"><h1>{this.state.nickname} </h1> </div>
                <div id="cerrar"className="col-5">

                <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                </div>
                </div>
                <br></br>
                <h3>Correo:         {this.state.email} </h3>
                <h3>Nickname:            {this.state.nickname} </h3>
                <h3>Nombre:       {this.state.name} </h3>
             
             
              
        </div>
        </div>

            )
        }
        {
          !isAuthenticated() && (
              <h4>
                No estas logeado! Por favor{' '}
                <a style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}>
                  Ingresa
                </a>
                {' '} para continuar.
              </h4>
            )
        }
      </div>
    );
  }
}

export default User;