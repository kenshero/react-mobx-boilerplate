import React, { Component } from 'react';
import './App.css';
import Greeting from './components/greeting';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Hello, App 2</h1>
        <Greeting/>
      </div>
    );
  }
}
