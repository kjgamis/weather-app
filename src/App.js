import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Titles  from './components/Titles'

import Home    from './components/Home'
import Current from './components/Current'
import Fiveday from './components/Fiveday'

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
                <Link to='/current'>Current Weather</Link>{' '}
                <Link to='/fiveday'>Five Day Forecast</Link>

                <Route exact path='/' component={Home} />
                <Route path='/current' component={Current} />
                <Route path='/fiveday' component={Fiveday} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
