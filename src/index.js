import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './components/LoginPage';
import Chat from './components/Chat';
import Confirmation from './components/Confirmation';
import Volunteer from './components/Volunteer';
import Dashboard from './components/Dashboard';
import Crud from './components/Crud';
import Profile from './components/Profile';


/*
ReactDOM.render(
    <App />, document.getElementById('root')
);
*/
ReactDOM.render(
    <HashRouter>
    	<div>
    	<App />    	
    	<Route path="/dashboard" component ={Dashboard} />
        <Route path="/profile" component ={Profile} />
        <Route path="/login" component ={LoginPage} /> 
        <Route path="/chat" component ={Chat} /> 
        <Route path="/volunteer" component ={Volunteer} />
        <Route path="/confirmation" component ={Confirmation} />
        <Route path="/crud" component ={Crud} />	
        </div>
    </HashRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
