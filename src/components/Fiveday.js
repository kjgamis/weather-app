import React, { Component } from 'react';

import Form    from './Form'
import Weather from './Weather'

class Fiveday extends Component {
  state = {
    next3Hours:   undefined,
    next6Hours:   undefined,
    next9Hours:   undefined,
    temperature3: undefined,
    description3: undefined,
    humidity3:    undefined,
    temperature6: undefined,
    description6: undefined,
    humidity6:    undefined,
    temperature9: undefined,
    description9: undefined,
    humidity9:    undefined,
    error:        undefined

  }

  getWeather = async (e) => {
    e.preventDefault()

    // values from input
    const city    = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY = '9b1f3a63c822bb3747599ee339af431e'

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data     = await api_call.json()
    console.log(data)

    // avoids breaking the app if button is clicked with blank values in the form
    if (city && country) {
      this.setState({
        next3Hours:   'Next 3 Hours',
        next6Hours:   'Next 6 Hours',
        next9Hours:   'Next 9 Hours',
        temperature3: data.list[0].main.temp,
        description3: data.list[0].weather[0].description,
        humidity3:    data.list[0].main.humidity,
        temperature6: data.list[1].main.temp,
        description6: data.list[1].weather[0].description,
        humidity6:    data.list[1].main.humidity,
        temperature9: data.list[2].main.temp,
        description9: data.list[2].weather[0].description,
        humidity9:    data.list[2].main.humidity,
        error:       ''
      });
    } else {
      this.setState({
        next3Hours:   undefined,
        next6Hours:   undefined,
        next9Hours:   undefined,
        temperature3: undefined,
        description3: undefined,
        humidity3:    undefined,
        temperature6: undefined,
        description6: undefined,
        humidity6:    undefined,
        temperature9: undefined,
        description9: undefined,
        humidity9:    undefined,
        error:       'Please enter a valid city and country'
      })
    }

  }

  clearForm = e => {
    e.preventDefault();

    this.setState({
      next3Hours:   undefined,
      next6Hours:   undefined,
      next9Hours:   undefined,
      temperature3: undefined,
      description3: undefined,
      humidity3:    undefined,
      temperature6: undefined,
      description6: undefined,
      humidity6:    undefined,
      temperature9: undefined,
      description9: undefined,
      humidity9:    undefined,
      error:        undefined
    })
  }

  render() {
    return(
      <div>
        <Form getWeather={this.getWeather} />
        <Weather
          next3Hours  ={this.state.next3Hours}
          next6Hours  ={this.state.next6Hours}
          next9Hours  ={this.state.next9Hours}

          temperature3={this.state.temperature3}
          description3={this.state.description3}
          humidity3   ={this.state.humidity3}

          temperature6={this.state.temperature6}
          description6={this.state.description6}
          humidity6   ={this.state.humidity6}

          temperature9={this.state.temperature9}
          description9={this.state.description9}
          humidity9   ={this.state.humidity9}

          error       ={this.state.error}
        />
      </div>
    )
  }
}

export default Fiveday;
