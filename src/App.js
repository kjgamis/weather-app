import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Titles  from './components/Titles'

import Current from './components/Current'
import Home    from './components/Home'

class App extends Component {


  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-md-5 title-container">
                <Titles />
              </div>

              <div className="col-md-7 form-container">
                <Link to='/'>Home</Link>{' '}
                <Link to='/current'>Current Weather</Link>

                <Route exact path='/' component={Home} />
                <Route path='/current' component={Current} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
