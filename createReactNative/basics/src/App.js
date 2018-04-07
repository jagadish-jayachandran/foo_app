import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';

import Footer from './components/Footer';
class App extends Component {
  onGreet(){
    alert("Hello!");
  }
  render() {
    var user = {
      name: "jaga",
      hobbies: ["cricket", "Tennis"]
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <Header />
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Home user={user} greet={this.onGreet} />
        </div>

        <i className="devicons devicons-vim"><Footer /></i>
      </div>
    );
  }
}

export default App;
