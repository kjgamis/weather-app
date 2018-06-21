import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '9b1f3a63c822bb3747599ee339af431e'

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${API_KEY}&units=metric`)
    const data     = await api_call.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>This is the container</h1>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
