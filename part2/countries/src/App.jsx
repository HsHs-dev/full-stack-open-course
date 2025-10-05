import { useState, useEffect } from 'react'
import getAllCountries from './services/countries'
import SearchBar from './components/SearchBar'
import DispalyCountries from './components/DisplayCountries'

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

  return (
    <div>
      <SearchBar value={search} onChange={handleSearchChange} />
      <DispalyCountries countries={countries} filter={search} />
    </div>
  )
}

export default App