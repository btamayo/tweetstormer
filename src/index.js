import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class TestApp extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
