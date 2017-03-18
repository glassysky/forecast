import React, { Component } from 'react';
import './App.css';

import getGeolocation from '../utils/getGeolocation';

class App extends Component {
  constructor(props) {
    super(props);
    getGeolocation().then(location => console.log(location));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <i className="fa fa-thermometer-full" aria-hidden="true" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
