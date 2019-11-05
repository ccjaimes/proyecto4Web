import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import Grupo from './Grupo/grupo'
import React, { Component }  from 'react';


const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
  );