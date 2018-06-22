import React from 'react';

const Weather = props => (
  <div className='weather-info'>
    { props.city && props.country &&
      <p className='weather-key'>
        Location:    <span className='weather-value'>{ props.city }, { props.country }</span>
      </p> }

    { props.temperature &&
      <p className='weather-key'>
        Temperature: <span className='weather-value'>{ props.temperature }°C</span>
      </p> }
    { props.description &&
      <p className='weather-key'>
        Conditions:  <span className='weather-value'>{ props.description }</span>
      </p> }
    { props.humidity &&
      <p className='weather-key'>
        Humidity:    <span className='weather-value'>{ props.humidity }%</span>
      </p> }

    { props.next3Hours && props.temperature3 && props.description3 && props.humidity3 &&
      <div className="each">
        { props.next3Hours &&
          <p className='weather-key'>
            Day: <span className='weather-value'>{ props.next3Hours }</span>
          </p> }
        { props.temperature3 &&
          <p className='weather-key'>
            Temperature: <span className='weather-value'>{ props.temperature3 }°C</span>
          </p> }
        { props.description3 &&
          <p className='weather-key'>
            Conditions:  <span className='weather-value'>{ props.description3 }</span>
          </p> }
        { props.humidity3 &&
          <p className='weather-key'>
            Humidity:    <span className='weather-value'>{ props.humidity3 }%</span>
          </p> }
      </div>
    }

    { props.next3Hours && props.temperature3 && props.description3 && props.humidity3 &&
      <div className="each">
        { props.next6Hours &&
          <p className='weather-key'>
            Day: <span className='weather-value'>{ props.next6Hours }</span>
          </p> }
        { props.temperature6 &&
          <p className='weather-key'>
            Temperature: <span className='weather-value'>{ props.temperature6 }°C</span>
          </p> }
        { props.description6 &&
          <p className='weather-key'>
            Conditions:  <span className='weather-value'>{ props.description6 }</span>
          </p> }
        { props.humidity6 &&
          <p className='weather-key'>
          Humidity:    <span className='weather-value'>{ props.humidity6 }%</span>
          </p> }
      </div>
    }

    { props.next3Hours && props.temperature3 && props.description3 && props.humidity3 &&
      <div className="each">
        { props.next9Hours &&
          <p className='weather-key'>
            Day: <span className='weather-value'>{ props.next9Hours }</span>
          </p> }
        { props.temperature9 &&
          <p className='weather-key'>
            Temperature: <span className='weather-value'>{ props.temperature9 }°C</span>
          </p> }
        { props.description9 &&
          <p className='weather-key'>
            Conditions:  <span className='weather-value'>{ props.description9 }</span>
          </p> }
        { props.humidity9 &&
          <p className='weather-key'>
            Humidity:    <span className='weather-value'>{ props.humidity9 }%</span>
          </p> }
      </div>
    }

    { props.error &&
      <p className='weather-key'>
        { props.error }
      </p> }
  </div>
)

export default Weather;
