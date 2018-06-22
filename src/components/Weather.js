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

    { props.next3Hours && props.temperature3 && props.description3 && props.humidity3 && props.next6Hours && props.temperature6 && props.description6 && props.humidity6 && props.next9Hours && props.temperature9 && props.description9 && props.humidity9 &&
      <div className="three-hour-display">
        <div className="each">
          <p className="weather-key">Interval</p>
          <p className="weather-key">Temperature</p>
          <p className="weather-key">Description</p>
          <p className="weather-key">Humidity</p>
          <p className="weather-key">Wind</p>
          <p className="weather-key">Pressure</p>
        </div>

        { props.next3Hours && props.temperature3 && props.description3 && props.humidity3 && props.wind3 && props.pressure3 &&
          <div className="each">
            { props.next3Hours &&
              <p className='weather-key'>
                { props.next3Hours }
              </p> }
            { props.temperature3 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.temperature3 }°C</span>
              </p> }
            { props.description3 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.description3 }</span>
              </p> }
            { props.humidity3 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.humidity3 }%</span>
              </p> }
            { props.wind3 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.wind3 }m/sec</span>
              </p> }
            { props.pressure3 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.pressure3 }hPa</span>
              </p> }
          </div>
        }

        { props.next6Hours && props.temperature6 && props.description6 && props.humidity6 && props.wind6 && props.pressure6 &&
          <div className="each">
            { props.next6Hours &&
              <p className='weather-key'>
                { props.next6Hours }
              </p> }
            { props.temperature6 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.temperature6 }°C</span>
              </p> }
            { props.description6 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.description6 }</span>
              </p> }
            { props.humidity6 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.humidity6 }%</span>
              </p> }
            { props.wind6 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.wind6 }m/sec</span>
              </p> }
            { props.pressure6 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.pressure6 }hPa</span>
              </p> }
          </div>
        }

        { props.next9Hours && props.temperature9 && props.description9 && props.humidity9 && props.wind9 && props.pressure9 &&
          <div className="each">
            { props.next9Hours &&
              <p className='weather-key'>
                { props.next9Hours }
              </p> }
            { props.temperature9 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.temperature9 }°C</span>
              </p> }
            { props.description9 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.description9 }</span>
              </p> }
            { props.humidity9 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.humidity9 }%</span>
              </p> }
            { props.wind9 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.wind9 }m/sec</span>
              </p> }
            { props.pressure9 &&
              <p className='weather-key'>
                <span className='weather-value'>{ props.pressure9 }hPa</span>
              </p> }
          </div>
        }

      </div>

    }



    { props.error &&
      <p className='weather-key'>
        { props.error }
      </p> }
  </div>
)

export default Weather;
