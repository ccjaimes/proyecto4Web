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
  
  componentDidMount () {
    var persistState = localStorage.getItem('user');
    
    if (persistState) {
      try {
        this.setState(JSON.parse(persistState));
      } catch (e) {
        // is not json
      }
    }
  }
  
  componentWillUnmount () {
    localStorage.setItem('user', JSON.stringify(this.state));
  }

  login() {
    if((this.props.location!==undefined)&&(this.props.location.aboutProps!==undefined)&&(this.props.location.aboutProps.auth!==undefined)){
        this.props.location.aboutProps.auth.login();
    
      }
      else{
        this.props.auth.login();
    
      }
  }

  logout() {
      if((this.props.location!==undefined)&&(this.props.location.aboutProps!==undefined)&&(this.props.location.aboutProps.auth!==undefined)){
        this.props.location.aboutProps.auth.logout();
      }
      else{
        this.props.auth.logout();
      }
   
  }

  render() {
      console.log(this.props);
      var m=null;
      if((this.props.location!==undefined)&&(this.props.location.aboutProps!==undefined)&&(this.props.location.aboutProps.auth!==undefined)){
        m=this.props.location.aboutProps.auth;
      }
      else{
        m=this.props.auth;

      }
    const { isAuthenticated } = m;
   
    
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
                <div className="col-7"><h1>{this.state.nickname} </h1> </div>
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
                <h3>Nickname:            {this.state.nickname} </h3>
                <h3>Correo:       {this.state.name} </h3>
             
             
              
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