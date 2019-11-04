import React, { Component } from 'react';

class User extends Component {
    state={
        user:{
            sub: "",
            nickname: "",
            name: "",
            picture: "",
            updated_at: "",
            email: "",
            email_verified: ""
        }
    }
  getuserinfo() {
    this.setState({
        usuario :this.props.auth.getuserinfo()});
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              
            
        
        <div className="row">
            
                <div className="col-3">
                <img src={this.state.usuario.picture} className="img-fluid" alt="Institution" width="300" height="300"></img>

                </div>
                <div className="col-7">
                <div className="row">
                <div className="col-4"><h1>{this.state.usuario} </h1> </div>
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
                <h3>Correo:         {this.state.usuario.email} </h3>
                <h3>Nickname:            {this.state.usuario.nickname} </h3>
                <h3>Nombre:       {this.state.usuario.name} </h3>
             
             
              
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

export default Home;