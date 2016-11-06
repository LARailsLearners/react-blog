import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link } from 'react-router'

// var $ = require('jquery');

class App extends Component {
  constructor() {
    super();
    this.state = { data: "", article: [] };
    // this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/articles/1.json')
      .then(function(response) {
        return response.json()
      }).then(json => {
        console.log(json);
        this.setState({
          article: json
        });
      });
  }

  getData = (userInput) => {
    this.setState({ data: userInput })
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
          <ul>
            <li>
              <Article article={ this.state.article } getData={this.getData} />
              <p>{this.state.data}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


class Article extends React.Component {
  handleChange = (e) => {
    this.props.getData(e.target.value)
  }
  render() {
    return (
      <div>
        <h1>{ this.props.article.title }</h1>
        <p>{ this.props.article.body }</p>
        <input onChange={this.handleChange} />
      </div>
    )
  }
}
export default App;
