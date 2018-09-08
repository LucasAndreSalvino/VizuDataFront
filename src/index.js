import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
