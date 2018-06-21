import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '9b1f3a63c822bb3747599ee339af431e'

class App extends Component {
  state = {
    temperature: undefined,
    city:        undefined,
    country:     undefined,
    humidity:    undefined,
    description: undefined,
    error:       undefined

  }

  getWeather = async (e) => {
    e.preventDefault()

    // values from input
    const city    = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data     = await api_call.json()
    console.log(data)

    this.setSate({
      temperature: data.main.temp,
      city:        data.name,
      country:     data.sys.country,
      humidity:    data.main.humidity,
      description: data.weather[0].description,
      error:       ''
    })

  }

  render() {
    return (
      <div>
        <h1>This is the container</h1>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
