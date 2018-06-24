import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Titles  from './components/Titles'

import Home    from './components/Home'
import Current from './components/Current'
import NineHours from './components/NineHours'
import Navigation from './components/Navigation'

class App extends Component {


  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>

            <div className="main">
              <div className="row">

                <div className="col-md-5 title-container">
                  <Titles />
                </div>

                <div className="col-md-7 form-container">
                  <Navigation />

                  <Route exact path='/' component={Home} />
                  <Route path='/current' component={Current} />
                  <Route path='/ninehours' component={NineHours} />
                </div>

              </div>
            </div>

          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
