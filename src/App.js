import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
