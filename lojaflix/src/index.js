import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroProd from './pages/CadastroProd'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path='/Cadastro/Produto' component={CadastroProd} exact/>
      <Route component={() => (<div><h1>ERRO 404</h1></div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
