import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Titles  from './components/Titles'

import Home    from './components/Home'
import Current from './components/Current'
import NineHours from './components/NineHours'
import Navigation from './components/Navigation'
import Error from './components/Error'

class App extends Component {
  constructor() {
    super()
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-123130196-2');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }

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
                <Navigation />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/current' component={Current} />
                  <Route path='/ninehours' component={NineHours} />
                  <Route component={Error} />
                </Switch>
              </div>

            </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
