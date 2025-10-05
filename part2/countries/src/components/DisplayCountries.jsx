import { useEffect, useState } from 'react'
import CountryInfo from './CountryInfo'

const DispalyCountries = ({ countries, filter }) => {

  const [showCountry, setShowCountry] = useState(null)

  // reset showCountry when filter changes (when searching)
  useEffect(() => {
    setShowCountry(null)
  }, [filter])

  const filterCountries = () => {
    if (countries.length > 0) {
      return countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase()))
    }
    return []
  }

  const matchedCountries = filter.trim().length === 0 ? [] : filterCountries()

  const displayCountry = (country) => {
    setShowCountry(country)
  }


  if (matchedCountries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (matchedCountries.length === 1) {
    return (
      <CountryInfo country={matchedCountries[0]} />
    )
  } else if (showCountry) {
    return (
      <CountryInfo country={showCountry} />
    )
  } else {
    return (
      matchedCountries.map(country => (
        <div key={country.name.common}>
          {country.name.common} <button onClick={() => displayCountry(country)}>Show</button>
        </div>
      ))
    )
  }

}

export default DispalyCountries