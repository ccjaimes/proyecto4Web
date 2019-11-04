import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './home';
import Page from './MasterDetail/Page';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Reportar from './reportar';
import User from './User/User';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/page" render={(props) => <Page auth={auth} {...props} />} />
                
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
            
          }}/>
        </div>
      </Router>
  );
}