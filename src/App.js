import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Titles  from './components/Titles'
import Form    from './components/Form'
import Weather from './components/Weather'
import Current from './components/Current'

class App extends Component {


  render() {
    return (
      <div>
        <Current />
      </div>
    );
  }
}

export default App;
