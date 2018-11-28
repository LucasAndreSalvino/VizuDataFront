import React, { Component } from 'react';
import Customers from './customers';
import {BrowserRouter} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import {Link} from "react-router-dom";
class HomePage extends Component {
constructor(props) {
    super(props);

    localStorage.setItem('session',false);
	console.log("session:false");
    console.log(localStorage.getItem('session'));
  }

  render() {
    return (
      <div>
  
        <h1><Link to='/login'>login</Link></h1>
        <h1><Link to='/signup'>signup</Link></h1>
        {Customers}
      </div>
    );
  }
}

export default HomePage;
