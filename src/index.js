import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/Components/Common/header';
import Home from '../src/Components/home';
import Listdata from '../src/Components/listdata';
import Pagenotfound from '../src/Components/pagenotfound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class Root extends React.Component {

  render() {
      return(
      <BrowserRouter basename={'/'} >
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/listdata" component={Listdata} />
        <Route component={Pagenotfound} />
      </Switch>
      </BrowserRouter>
    );
  }
  }
  
  ReactDOM.hydrate(<Root />, document.getElementById('root'))