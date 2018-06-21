import React, { Component } from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '9b1f3a63c822bb3747599ee339af431e'

class App extends Component {
  state = {
    city:        undefined,
    country:     undefined,
    temperature: undefined,
    description: undefined,
    humidity:    undefined,
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

    // avoids breaking the app if button is clicked with blank values in the form
    if (city && country) {
      this.setState({
        city:        data.name,
        country:     data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity:    data.main.humidity,
        error:       ''
      });
    } else {
      this.setState({
        city:        undefined,
        country:     undefined,
        temperature: undefined,
        description: undefined,
        humidity:    undefined,
        error:       'Please enter a valid city and country'
      })
    }

  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather
        city       ={this.state.city}
        country    ={this.state.country}
        temperature={this.state.temperature}
        description={this.state.description}
        humidity   ={this.state.humidity}
        error      ={this.state.error}
        />
      </div>
    );
  }
}

export default App;
