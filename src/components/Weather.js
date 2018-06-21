import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.city } { this.props.country }</p>
        <p>{ this.props.temperature }</p>
        <p>{ this.props.description }</p>
        <p>{ this.props.humidity }</p>
        <p>{ this.props.error }</p>
      </div>
    )
  }
}

export default Weather;
