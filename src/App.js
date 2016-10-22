import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// var $ = require('jquery');

class App extends Component {
  constructor() {
    super();
    this.state = { articles: []};
  }

  componentDidMount() {
    fetch('http://localhost:3000/articles.json')
      .then(function(response) {
        return response.json()
      }).then(json => {
          console.log(json);
          this.setState({
            articles: json
          });
        });
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
              <ArticlesList articles={ this.state.articles } />
              <h1>{ this.state.title }</h1>
              <p>{ this.state.body }</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class ArticlesList extends React.Component {
  render() {
    return <div>
      { this.props.articles.map( (article, index) => {
        return <div key={ index }>
          <h1>{ article.title }</h1>
          <p>{ article.body }</p>
        </div>
      })
    }
    </div>
  }
}

export default App;
