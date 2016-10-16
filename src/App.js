import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var $ = require('jquery');

class App extends Component {
  constructor() {
    super();
    this.state = { articles: []};
  }

  componentDidMount() {
    this.serverRequest = $.get('http://localhost:3000/articles', function (result) {
      console.log(result);
      var firstArticle = result[0];
      this.setState({
        title: firstArticle.title,
        body: firstArticle.body
      })
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>{ this.state.title }</h1>
          <p>{ this.state.body }</p>
        </div>
      </div>
    );
  }
}

export default App;
