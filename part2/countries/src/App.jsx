import { useState, useEffect } from 'react'
import getAllCountries from './services/countries'

const App = () => {

  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getAllCountries
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  } ,[])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filterCountries = () => {
    if (countries.length > 0) {
      return countries.filter(country => 
        country.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    return []
 }

  const matchedCountries = search.trim().length === 0 ? [] : filterCountries()

  const displayedCountries = () => {
    if (matchedCountries.length > 10) {
      return (
        <p>Too many matches, specify another filter</p>
      )
    } else if (matchedCountries.length === 1) {
      const country = matchedCountries[0]
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
        </div>
      )
    } else {
      return (
        <div>
          {matchedCountries.map(country => (
            <div key={country.name.common}>{country.name.common}</div>
          ))}
        </div>
      )
    }
  }

  return (
    <div>
      find countries <input value={search} onChange={handleSearchChange}/>
      {displayedCountries()}
    </div>
  )

}

export default App