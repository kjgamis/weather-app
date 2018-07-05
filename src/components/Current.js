import React, { Component } from 'react';

import Form    from './Form'
import Weather from './Weather'

class Current extends Component {
  state = {
    city:        undefined,
    country:     undefined,
    temperature: undefined,
    description: undefined,
    humidity:    undefined,
    error:       undefined

  }

  getWeather = (e) => {
    e.preventDefault()

    // values from input
    const city    = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY = '9b1f3a63c822bb3747599ee339af431e'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then((response) => { return response.json() })
    .then((data)     => {
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
    })
    .catch((ex) => {
      console.log('Error parsing data')
    })

  }

  clearForm = e => {
    e.preventDefault();

    this.setState({
      city:        undefined,
      country:     undefined,
      temperature: undefined,
      description: undefined,
      humidity:    undefined,
      error:       undefined
    })
  }

  render() {
    return(
      <div>
        <Form getWeather={this.getWeather} />
        <Weather
          city       ={this.state.city}
          country    ={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          humidity   ={this.state.humidity}
          error      ={this.state.error}
        />
      </div>
    )
  }
}

export default Current;
