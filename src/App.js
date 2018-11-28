import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import NewVis from './components/NewVis';
import Signup from './components/Signup';
import { Switch,BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import Menu from './components/Menu';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu/>
      <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={Signup}/>
          <Route path='/mainpage' exact component={MainPage}/>
	  <Route path='/newvis' exact component={NewVis}/>
      </Switch>
      </div>
    );
  }
}

export default App;
