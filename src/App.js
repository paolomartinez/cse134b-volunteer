import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LoginPage from './components/LoginPage';
import Chat from './components/Chat';
import Confirmation from './components/Confirmation';
import Volunteer from './components/Volunteer';
import Dashboard from './components/Dashboard';
import Crud from './components/Crud';
import Profile from './components/Profile';
import { Link } from 'react-router-dom';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      </div>
    );
  }
}

export default App;
