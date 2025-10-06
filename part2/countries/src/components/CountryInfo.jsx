import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const CountryInfo = ({ country }) => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(country.capital)
      .then(weather => {
        setWeather(weather)
      })
  }, [country])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital {country.capital[0]}</div>
      <div>Area {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map(lang => (<li key={lang}>{lang}</li>))}
      </ul>
      <img src={country.flags.png} />
      <h2>Weather in {country.capital}</h2>
      {weather ? (
        <div>
          <p>Temperature {weather.current.temp_c} °C</p>
          <img 
            src={weather.current.condition.icon} 
            alt={weather.current.condition.text} 
            title={weather.current.condition.text}
          />
          <p>Wind {(weather.current.wind_kph / 3.6).toFixed(2)} m/s</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  )

}

export default CountryInfo