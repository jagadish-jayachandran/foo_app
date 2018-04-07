import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';

import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLink: "Home"
    };
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onGreet() {
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
            <Header homeLinkHead={this.state.homeLink} />
          </div>
        </header>
        <div>
          <Home
            user={user}
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            initialLinkName={this.state.homeLink}
          />
        </div>
        <div id="">
          <Footer copy={"copyrights goes here"} />
        </div>
      </div>
    );
  }
}

export default App;
